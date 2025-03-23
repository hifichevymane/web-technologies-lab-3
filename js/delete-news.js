const deleteNews = function () {
  const newsSectionData = document.querySelectorAll('.col1 .wrapper');
  newsSectionData.forEach(element => element.remove());
};

deleteNews();
