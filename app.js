
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");
navToggle?.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(opened));
});
navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const records = {
  login:["VICS Authentication","Secure member authentication will connect to the final community account system."],
  application:["Personnel Intake","The application workflow will create a pending VPIN record for Personnel Command review."],
  operations:["Fleet Operations","Operational directives, active missions and readiness reports will appear here."],
  "silent-horizon":["Operation Silent Horizon","Mission archive placeholder for participating ships, reports and citations."],
  "academy-courses":["Academy Course Catalog","Training modules will be managed through the Vanguard Fleet Academy."],
  frontier:["Frontier Initiative","Fleet-wide exploration assignments and objectives will appear here."],
  discovery:["USS Discovery","NCC-78393-B • Prometheus-class tactical cruiser."],
  orders:["Fleet Orders Archive","Official directives use the VF-ORD-2405-### standard."],
  "order-104":["VF-ORD-2405-104","Quarterly readiness review for all active commands."],
  "order-103":["VF-ORD-2405-103","Frontier Initiative deployment instructions."],
  "order-102":["VF-ORD-2405-102","Vanguard Fleet Academy graduation ceremony."]
};
const modal = document.querySelector("#modal");
document.querySelectorAll("[data-open]").forEach(el => el.addEventListener("click", () => {
  const [title, copy] = records[el.dataset.open] || ["VICS Record","Module ready for integration."];
  document.querySelector("#modal-title").textContent = title;
  document.querySelector("#modal-copy").textContent = copy;
  modal.showModal();
}));
