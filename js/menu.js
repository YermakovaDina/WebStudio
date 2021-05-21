; (() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtn2Ref = document.querySelector("[data-item]");
  const menuBtn3Ref = document.querySelector("[data-item2]");
  const menuBtn4Ref = document.querySelector("[data-item3]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", menu);
  menuBtn2Ref.addEventListener("click", menu);
  menuBtn3Ref.addEventListener("click", menu);
  menuBtn4Ref.addEventListener("click", menu);
  
  function menu() {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    document.body.classList.toggle("menu-open");
    
    menuBtnRef.classList.toggle("is-open");
    /*menuBtn2Ref.setAttribute("aria-expanded", !expanded);*/
    mobileMenuRef.classList.toggle("is-open");
     }
})();
