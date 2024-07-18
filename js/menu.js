function isMobileDevice() {
    return window.matchMedia("only screen and (max-width: 768px)").matches;
  }

  // Установка начального состояния меню
  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-content");
    const menuBtn = document.querySelector(".menu-btn");
    if (isMobileDevice()) {
      menu.style.display = "none";
      menuBtn.style.display = "block";
      console.log("Mobile device detected - Menu hidden, Button visible");
    } else {
      menu.style.display = "block";
      menuBtn.style.display = "none";
      console.log("Desktop detected - Menu visible, Button hidden");
    }
  });

  // Обработчик для кнопки меню
  document.querySelector(".menu-btn").addEventListener("click", function () {
    const menu = document.querySelector(".menu-content");
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      console.log("Menu button clicked - Menu shown");
    } else {
      menu.style.display = "none";
      console.log("Menu button clicked - Menu hidden");
    }
  });

  // Переключение состояния меню при изменении размеров окна
  window.addEventListener("resize", function () {
    const menu = document.querySelector(".menu-content");
    const menuBtn = document.querySelector(".menu-btn");
    if (isMobileDevice()) {
      menu.style.display = "none";
      menuBtn.style.display = "block";
      console.log("Resized to mobile - Menu hidden, Button visible");
    } else {
      menu.style.display = "block";
      menuBtn.style.display = "none";
      console.log("Resized to desktop - Menu visible, Button hidden");
    }
  });