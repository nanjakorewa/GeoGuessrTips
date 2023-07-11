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


window.addEventListener("load", function () {
    const blurCheckbox = document.querySelector('#blur-checkbox');
    const isBlurOn = localStorage.getItem('isBlurOn');
    if (!blurCheckbox) {
        return;
    }

    if (isBlurOn === 'true') {
        blurCheckbox.checked = true;
        addClassToTag('h2', 'blurtext');
        addClassToTag('h3', 'blurtext');
        addClassToTag('h4', 'blurtext');
        addClassToTag('iframe', 'iframe-blur');
        removeClassToClassName('section-title', 'blurtext');
        removeClassToClassName('no-blur', 'blurtext');
    } else {
        blurCheckbox.checked = false;
        removeClassToTag('h2', 'blurtext');
        removeClassToTag('h3', 'blurtext');
        removeClassToTag('h4', 'blurtext');
        removeClassToTag('iframe', 'iframe-blur');
    }

    blurCheckbox.addEventListener('change', function () {
        const isBlurOn = this.checked;
        if (isBlurOn) {
            addClassToTag('h2', 'blurtext');
            addClassToTag('h3', 'blurtext');
            addClassToTag('h4', 'blurtext');
            addClassToTag('iframe', 'iframe-blur');
            removeClassToClassName('section-title', 'blurtext');
            removeClassToClassName('no-blur', 'blurtext');
        } else {
            removeClassToTag('h2', 'blurtext');
            removeClassToTag('h3', 'blurtext');
            removeClassToTag('h4', 'blurtext');
            removeClassToTag('iframe', 'iframe-blur');
        }
        localStorage.setItem('isBlurOn', isBlurOn);
    });
});


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

