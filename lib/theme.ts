export const THEME_STORAGE_KEY = "rt-theme";

/**
 * Inlined in <head> so the class lands before first paint. Without it the page
 * flashes light before a stored dark preference is read.
 */
export const themeScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s?s==="dark":true;document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}})();`;
