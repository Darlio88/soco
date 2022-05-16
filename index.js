const menuItems = document.querySelectorAll(".menu-item");
const fontSizeChoice = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");

const messagesNotification = document.querySelector("#message-notification");
const messageBox = document.querySelector(".messages");
//STYLING THE MENU ITEMS
//sibebar

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

//STyling the messages section

messagesNotification.addEventListener("click", () => {
  messageBox.style.boxShadow = "0 0 1rem var(--color-primary)";
  document.querySelector(
    "#message-notification .notification-count"
  ).style.display = "none";

  setTimeout(() => {
    messageBox.style.boxShadow = "none";
  }, 2000);
});

//filering messages using search
const messageSearch = document.querySelector("#message-search");
const chat = document.querySelectorAll(".message");

const filterMessage = () => {
  const val = messageSearch.value.toLowerCase();
  chat.forEach((user) => {
    const name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", filterMessage);

//THEME CUSTOMIZATION
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
//opening theme modal function
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
theme.addEventListener("click", openThemeModal);
//closing theme modal function
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);

//CUSTOMIzing the font sizes

const removeActiveFonts = () => {
  fontSizeChoice.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizeChoice.forEach((item) => {
  let fontSize;
  item.addEventListener("click", () => {
    removeActiveFonts();
    item.classList.toggle("active");
    if (item.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (item.classList.contains("font-size-2")) {
      fontSize = "13px";

      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (item.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (item.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (item.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    //changing font size of the web app
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//CUSTOMIZING THE THEME COLOR

const targetColors = document.querySelectorAll(".color span");

const removeActiveColor = () => {
  targetColors.forEach((color) => {
    color.classList.remove("active");
  });
};

targetColors.forEach((color) => {
  let primaryVue;
  color.addEventListener("click", () => {
    removeActiveColor();
    color.classList.toggle("active");
    if (color.classList.contains("color-1")) {
      primaryVue = "252";
    } else if (color.classList.contains("color-2")) {
      primaryVue = "52";
    } else if (color.classList.contains("color-3")) {
      primaryVue = "352";
    } else if (color.classList.contains("color-4")) {
      primaryVue = "152";
    } else if (color.classList.contains("color-5")) {
      primaryVue = "202";
    }
    root.style.setProperty("--color-primary-vue", primaryVue);
  });
});

/** custmizing the background color */

const targetBackground = document.querySelectorAll(".choose-bg div ");

const activeBackgroundColor = () => {
  targetBackground.forEach((color) => {
    color.classList.remove("active");
  });
};

targetBackground.forEach((color) => {
  let darkColorLightness;
  let lightColorLightness;
  let whiteColorLightness;

  color.addEventListener("click", () => {
    activeBackgroundColor();
    color.classList.toggle("active");
    if (color.classList.contains("bg-1")) {
      darkColorLightness = "17%";
      lightColorLightness = "95%";
      whiteColorLightness = "100%";
    } else if (color.classList.contains("bg-2")) {
      darkColorLightness = "95%";
      lightColorLightness = "15%";
      whiteColorLightness = "20%";
    } else if (color.classList.contains("bg-3")) {
      darkColorLightness = "95%";
      lightColorLightness = "0%";
      whiteColorLightness = "10%";
    }

    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
  });
});
