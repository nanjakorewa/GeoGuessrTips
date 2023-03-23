
function changeFontSize() {
    var radios = document.getElementsByName("font-size");
    var selectedSize = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedSize = radios[i].value;
            break;
        }
    }
    switch (selectedSize) {
        case "22px":
            document.documentElement.style.fontSize = "larger";
            localStorage.setItem("fontSize", "22px");
            changeFontSizeForText("22px");
            break;
        case "15px":
            document.documentElement.style.fontSize = "medium";
            localStorage.setItem("fontSize", "15px");
            changeFontSizeForText("15px");
            break;
        case "12px":
            document.documentElement.style.fontSize = "smaller";
            localStorage.setItem("fontSize", "12px");
            changeFontSizeForText("12px");
            break;
        case "reset":
            document.documentElement.style.fontSize = "smaller";
            localStorage.setItem("fontSize", "");
            changeFontSizeForText("");
            break;
    }
}


function changeFontSizeForText(size) {
    const divElements = document.getElementsByTagName('div');
    for (let i = 0; i < divElements.length; i++) {
        const element = divElements[i];
        const style = window.getComputedStyle(element);
        const fontSize = parseInt(style.fontSize);
        element.style.fontSize = `${size}`;
    }

    const liElements = document.getElementsByTagName('li');
    for (let i = 0; i < liElements.length; i++) {
        const element = liElements[i];
        const style = window.getComputedStyle(element);
        const fontSize = parseInt(style.fontSize);
        element.style.fontSize = `${size}`;
    }

    const pElements = document.getElementsByTagName('p');
    for (let i = 0; i < pElements.length; i++) {
        const element = pElements[i];
        const style = window.getComputedStyle(element);
        const fontSize = parseInt(style.fontSize);
        element.style.fontSize = `${size}`;
    }

    const aElements = document.getElementsByTagName('a');
    for (let i = 0; i < aElements.length; i++) {
        const element = aElements[i];
        const style = window.getComputedStyle(element);
        const fontSize = parseInt(style.fontSize);
        element.style.fontSize = `${size}`;
    }
}


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
    const isBlurOn = localStorage.getItem('isBlurOn');
    if (!blurCheckbox) {
        return;
    }

    if (isBlurOn === 'true') {
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
        const isBlurOn = this.checked;
        if (isBlurOn) {
            addClassToClassName('description', 'blurtext');
            addClassToTag('span', 'blurtext-2');
            removeClassToClassName('no-blur', 'blurtext-2');
        } else {
            removeClassToClassName('description', 'blurtext');
            removeClassToTag('span', 'blurtext-2');
        }
        localStorage.setItem('isBlurOn', isBlurOn);
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

