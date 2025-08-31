window.onload = function () {
    var fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
        if (fontSize === "22px") {
            document.getElementsByName("font-size")[0].checked = true;
            changeFontSizeForText("22px");
        } else if (fontSize === "15px") {
            document.getElementsByName("font-size")[1].checked = true;
            changeFontSizeForText("15px");
        } else if (fontSize === "12px") {
            document.getElementsByName("font-size")[2].checked = true;
            changeFontSizeForText("12px");
        }

        var radios = document.getElementsByName("font-size");
        var storedSize = localStorage.getItem("fontSize");
        if (storedSize !== null) {
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].value === storedSize) {
                    radios[i].checked = true;
                    changeFontSize();
                    break;
                }
            }
        }
    }
};


function addClassToTag(tagname, classname) {
    const h3Elements = document.getElementsByTagName(tagname);
    for (let i = 0; i < h3Elements.length; i++) {
        const element = h3Elements[i];
        element.classList.add(classname);
    }
}

function removeClassToTag(tagname, classname) {
    const h3Elements = document.getElementsByTagName(tagname);
    for (let i = 0; i < h3Elements.length; i++) {
        const element = h3Elements[i];
        element.classList.remove(classname);
    }
}

function addClassToClassName(targetClass, classname) {
    const h3Elements = document.getElementsByClassName(targetClass);
    for (let i = 0; i < h3Elements.length; i++) {
        const element = h3Elements[i];
        element.classList.add(classname);
    }
}

function removeClassToClassName(targetClass, classname) {
    const h3Elements = document.getElementsByClassName(targetClass);
    for (let i = 0; i < h3Elements.length; i++) {
        const element = h3Elements[i];
        element.classList.remove(classname);
    }
}

function applyblur() {
    isBlurOn = true;
    blurCheckbox = document.querySelector('input[name=hoge]:checked');

    if (blurCheckbox){
        console.log(blurCheckbox.value);
    }
    else{
        isBlurOn = true;
    }

    const ans = blurCheckbox.value;
    if (ans=="c") {
        isBlurOn = false;
    }

    if (isBlurOn === true) {
        console.log("applybler");
        addClassToTag('iframe', 'iframe-blur');
        removeClassToClassName('section-title', 'blurtext');
        removeClassToClassName('no-blur', 'blurtext');
    } else {
        removeClassToTag('iframe', 'iframe-blur');
    }

    blurCheckbox.addEventListener('change', function () {
        if (isBlurOn) {
            addClassToTag('iframe', 'iframe-blur');
            removeClassToClassName('section-title', 'blurtext');
            removeClassToClassName('no-blur', 'blurtext');
            addClassToClassName('ansarea', 'transparent-area');
        } else {
            removeClassToTag('iframe', 'iframe-blur');
            removeClassToClassName('ansarea', 'transparent-area');
        }
        localStorage.setItem('isBlurOn', isBlurOn);
    });
}

window.addEventListener("load", applyblur());



window.addEventListener("load", function () {
    const blurCheckbox = document.querySelector('#blur-text-checkbox');
    const isBlurTextOn = localStorage.getItem('isBlurTextOn');
    if (!blurCheckbox) {
        return;
    }

    if (isBlurTextOn === 'true') {
        blurCheckbox.checked = true;
        addClassToClassName('description', 'blurtext');
        addClassToTag('span', 'blurtext-2');
        removeClassToClassName('no-blur', 'blurtext-2');
    } else {
        blurCheckbox.checked = false;
        removeClassToClassName('description', 'blurtext');
        removeClassToTag('span', 'blurtext-2');
    }

    blurCheckbox.addEventListener('change', function () {
        const isBlurTextOn = this.checked;
        if (isBlurTextOn) {
            addClassToClassName('description', 'blurtext');
            addClassToTag('span', 'blurtext-2');
            removeClassToClassName('no-blur', 'blurtext-2');
        } else {
            removeClassToClassName('description', 'blurtext');
            removeClassToTag('span', 'blurtext-2');
        }
        localStorage.setItem('isBlurTextOn', isBlurTextOn);
    });
});

function addRemoveHandler(idName, localStrageName, addedClsName, targetClassName) {
    const checkBox = document.querySelector(idName);
    const isChecked = localStorage.getItem(localStrageName);
    if (!checkBox) {
        return;
    }

    if (isChecked === 'true') {
        checkBox.checked = true;
        addClassToClassName(targetClassName, addedClsName);
        removeClassToClassName('no-blur', 'blurtext');
    } else {
        checkBox.checked = false;
        removeClassToClassName(targetClassName, addedClsName);
    }

    checkBox.addEventListener('change', function () {
        const isChecked = this.checked;
        if (isChecked) {
            addClassToClassName(targetClassName, addedClsName);
            removeClassToClassName('no-blur', 'blurtext');
        } else {
            removeClassToClassName(targetClassName, addedClsName);
        }
        localStorage.setItem(localStrageName, isChecked);
    });
}

window.addEventListener("load", function () {
    // 不明なルールを隠すボタン
    addRemoveHandler('#hide-unconfindent-checkbox', 'isHideNoEvidenceRules', 'hide-element', 'no-evidence');
});

window.addEventListener("load", function () {
    // 自分用のメモを表示するボタン
    addRemoveHandler('#show-mymemo-checkbox', 'isShowMymemo', 'mymemo-show', 'mymemo');
});
