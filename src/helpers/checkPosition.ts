export const checkPosition = () => {
   const height = document.body.offsetHeight
   const screenHeight = window.innerHeight
   const scrolled = window.scrollY

   const threshold = height - screenHeight / 4
   const position = scrolled + screenHeight

   if (position >= threshold) {
      return true
   }
   return false
}