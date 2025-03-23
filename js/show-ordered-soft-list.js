const dataSite = {
  proSoft: ['Firewall', 'Antivirus', 'VPN'],
  whyUs: ['High quality', 'Reliable', 'Fast'],
};
dataSite.proSoft.sort();

const elementList = document.querySelectorAll('.prof-soft-item');
elementList.forEach((element, index) => {
  element.textContent = `${index + 1}. ${dataSite.proSoft[index]}`;
});
