Param(
  [string]$BaseDir = "content\\rule\\africa"
)

Write-Host "Fixing image paths to root-absolute (/rule/africa/...) with UTF-8 BOM under: $BaseDir"

if (-not (Test-Path $BaseDir)) {
  Write-Error "BaseDir not found: $BaseDir"
  exit 1
}

function To-RootAbsolute([string]$url, [string]$rootUrl) {
  if ([string]::IsNullOrWhiteSpace($url)) { return $url }
  if ($url -match '^(https?:)?//') { return $url }
  if ($url.StartsWith('/')) { return $url }
  $clean = $url -replace '^[\./\\]+',''
  return ($rootUrl.TrimEnd('/') + '/' + ($clean -replace '\\','/'))
}

function Rewrite-Content([string]$content, [string]$rootUrl) {
  $out = $content
  $patSrcDq = 'src="(.*?)"'
  $patSrcSq = "src='(.*?)'"
  $patMdImg = '!\[[^\]]*\]\((.*?)\)'

  $out = [Regex]::Replace($out, $patSrcDq, {
    param($m)
    $orig = $m.Groups[1].Value
    $new = To-RootAbsolute $orig $rootUrl
    return 'src="' + $new + '"'
  })

  $out = [Regex]::Replace($out, $patSrcSq, {
    param($m)
    $orig = $m.Groups[1].Value
    $new = To-RootAbsolute $orig $rootUrl
    return "src='" + $new + "'"
  })

  $out = [Regex]::Replace($out, $patMdImg, {
    param($m)
    $orig = $m.Groups[1].Value
    $new = To-RootAbsolute $orig $rootUrl
    return $m.Value.Replace($orig, $new)
  })

  return $out
}

$files = Get-ChildItem -Recurse -Include _index.en.md,_index.es.md,_index.id.md -File $BaseDir
$updated = 0
foreach ($f in $files) {
  $dir = $f.DirectoryName
  $absDir = (Resolve-Path -LiteralPath $dir).Path
  $absBase = (Resolve-Path $BaseDir).Path
  $rel = $absDir.Substring($absBase.Length) -replace '^\\',''
  $rootUrl = ('/rule/africa/' + ($rel -replace '\\','/')).TrimEnd('/')

  $content = Get-Content -Raw -LiteralPath $f.FullName
  $rewritten = Rewrite-Content $content $rootUrl
  if ($rewritten -ne $content) {
    $enc = New-Object System.Text.UTF8Encoding($true)
    [System.IO.File]::WriteAllText($f.FullName, $rewritten, $enc)
    $updated++
  }
}

Write-Host ("Updated {0} files under Africa." -f $updated)
