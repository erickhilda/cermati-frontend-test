export default {
  mounted(el, binding) {
    el.__HandleScrollHandler__ = (event) => binding.value(event);
    document.body.addEventListener("mousewheel", el.__HandleScrollHandler__);
    document.body.addEventListener("touchmove", el.__HandleScrollHandler__);
  },
  unmounted(el) {
    document.body.removeEventListener("mousewheel", el.__HandleScrollHandler__);
    document.body.removeEventListener("touchmove", el.__HandleScrollHandler__);
  },
};
