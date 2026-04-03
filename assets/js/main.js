function copyAddress() {
  const addressText = document.getElementById("address").innerText;
  navigator.clipboard
    .writeText(addressText)
    .then(() => {
      alert("Address copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

window.addEventListener("scroll", function () {
  const comixScroll = document.querySelector(".moving_comix_scroll");
  const comixContent = document.querySelector(".moving_comix_content");

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const comixScrollTop = comixScroll.getBoundingClientRect().top + scrollTop;
  const comixHeight = comixScroll.offsetHeight;

  if (
    scrollTop + windowHeight > comixScrollTop &&
    scrollTop < comixScrollTop + comixHeight
  ) {
    const scrollPercentage =
      (scrollTop + windowHeight - comixScrollTop) /
      (windowHeight + comixHeight);

    const maxTranslate = comixContent.scrollWidth - comixScroll.offsetWidth;
    const translateX = Math.min(maxTranslate, maxTranslate * scrollPercentage);

    comixContent.style.transform = `translateX(-${translateX}px)`;
  }
});
