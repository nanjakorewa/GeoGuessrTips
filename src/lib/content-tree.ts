/**
 * Build a tree structure from Content Collection entries for sidebar navigation.
 */
import type { Language } from "./i18n-utils";
import { extractLangFromId, extractSlugFromId, buildUrl } from "./i18n-utils";

export interface TreeNode {
  title: string;
  url: string;
  weight: number;
  flag?: string;
  isUnofficial?: boolean;
  hasGooglecar?: boolean;
  hasTrekker?: boolean;
  hasBollard?: boolean;
  isPref?: boolean;
  additionalIcon?: string;
  quizSuffix?: string;
  pageNo?: string;
  children: TreeNode[];
}

/**
 * Build a navigation tree from flat Content Collection entries.
 * Only includes entries matching the given collection and language.
 */
export function buildContentTree(
  entries: Array<{ id: string; data: Record<string, any> }>,
  collection: string,
  lang: Language
): TreeNode[] {
  // Filter entries for the given language
  const filtered = entries.filter(
    (e) => extractLangFromId(e.id) === lang && !e.data.draft
  );

  // Pass 1: Create all nodes and index by slug
  const nodeMap = new Map<string, TreeNode>();

  for (const entry of filtered) {
    const slug = extractSlugFromId(entry.id);
    const url = buildUrl(collection, slug, lang);

    const node: TreeNode = {
      title: entry.data.title || slug.split("/").pop() || collection,
      url,
      weight: entry.data.weight ?? 99,
      flag: entry.data.flag,
      isUnofficial: entry.data.is_unofficial,
      hasGooglecar: entry.data.is_has_distinctive_googlecar,
      hasTrekker: entry.data.is_has_many_trekker,
      hasBollard: entry.data.is_has_distinctive_bollard,
      isPref: entry.data.is_pref,
      additionalIcon: entry.data.additional_icon,
      quizSuffix: entry.data.quiz_suffix,
      pageNo: entry.data.page_no,
      children: [],
    };

    nodeMap.set(slug, node);
  }

  // Pass 2: Build parent-child relationships
  const rootNodes: TreeNode[] = [];

  for (const [slug, node] of nodeMap) {
    const parts = slug.split("/");
    if (parts.length > 1) {
      const parentSlug = parts.slice(0, -1).join("/");
      const parent = nodeMap.get(parentSlug);
      if (parent) {
        parent.children.push(node);
      } else {
        // No parent entry found, treat as root
        rootNodes.push(node);
      }
    } else {
      rootNodes.push(node);
    }
  }

  // Sort all levels by weight
  function sortChildren(nodes: TreeNode[]) {
    nodes.sort((a, b) => a.weight - b.weight);
    for (const node of nodes) {
      sortChildren(node.children);
    }
  }
  sortChildren(rootNodes);

  return rootNodes;
}

/**
 * Find the section (top-level tree) that contains the current page.
 */
export function findCurrentSection(
  trees: TreeNode[],
  currentUrl: string
): TreeNode | null {
  for (const tree of trees) {
    if (isAncestorOf(tree, currentUrl)) {
      return tree;
    }
  }
  return null;
}

function isAncestorOf(node: TreeNode, url: string): boolean {
  if (node.url === url) return true;
  return node.children.some((child) => isAncestorOf(child, url));
}

/**
 * Get sibling pages (same parent) that have a flag, for "Countries in region" section.
 */
export function getSiblingCountries(
  entries: Array<{ id: string; data: Record<string, any> }>,
  currentEntryId: string,
  collection: string,
  lang: Language,
  maxCount: number = 12
): Array<{ title: string; url: string }> {
  const currentSlug = extractSlugFromId(currentEntryId);
  const currentParts = currentSlug.split("/");
  if (currentParts.length < 2) return [];

  const parentSlug = currentParts.slice(0, -1).join("/");

  const siblings = entries
    .filter((e) => {
      if (extractLangFromId(e.id) !== lang) return false;
      if (e.data.draft) return false;
      if (!e.data.flag) return false;
      const slug = extractSlugFromId(e.id);
      if (slug === currentSlug) return false;
      const parts = slug.split("/");
      if (parts.length !== currentParts.length) return false;
      return parts.slice(0, -1).join("/") === parentSlug;
    })
    .sort((a, b) => (a.data.weight ?? 99) - (b.data.weight ?? 99))
    .slice(0, maxCount)
    .map((e) => ({
      title: e.data.title,
      url: buildUrl(collection, extractSlugFromId(e.id), lang),
    }));

  return siblings;
}
