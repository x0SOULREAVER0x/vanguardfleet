const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

navToggle?.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(opened));
});

navLinks?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

const records = {
  login: ["VICS Authentication", "Secure member authentication will connect to the final community account system."],
  application: ["Personnel Intake", "The application workflow will create a pending VPIN record for Personnel Command review."],
  operations: ["Fleet Operations", "Operational directives, active missions and readiness reports will appear here."],
  "silent-horizon": ["Operation Silent Horizon", "Mission archive placeholder for participating ships, reports and citations."],
  "academy-courses": ["Academy Course Catalog", "Training modules will be managed through the Vanguard Fleet Academy."],
  frontier: ["Frontier Initiative", "Fleet-wide exploration assignments and objectives will appear here."],
  discovery: ["USS Discovery", "NCC-78393-B • Prometheus-class tactical cruiser."],
  orders: ["Fleet Orders Archive", "Official directives use the VF-ORD-2405-### standard."],
  "order-104": ["VF-ORD-2405-104", "Quarterly readiness review for all active commands."],
  "order-103": ["VF-ORD-2405-103", "Frontier Initiative deployment instructions."],
  "order-102": ["VF-ORD-2405-102", "Vanguard Fleet Academy graduation ceremony."]
};

const modal = document.querySelector("#modal");

document.querySelectorAll("[data-open]").forEach((el) =>
  el.addEventListener("click", () => {
    const [title, copy] = records[el.dataset.open] || ["VICS Record", "Module ready for integration."];
    document.querySelector("#modal-title").textContent = title;
    document.querySelector("#modal-copy").textContent = copy;
    modal.showModal();
  })
);

/* Expand VPIN on the home page */
const vpinHeading = [...document.querySelectorAll("h3")].find(
  (heading) => heading.textContent.trim().toUpperCase() === "VPIN"
);

if (vpinHeading) {
  const description = vpinHeading.nextElementSibling;

  if (description && description.tagName === "P") {
    description.innerHTML = `
      <strong>Vanguard Personnel Information Network</strong><br>
      Every officer receives a VPIN record containing a character portrait, service number,
      current assignment, rank, billet, career history, awards, qualifications, fitness reports,
      mission history, medical status, promotion history, training records and duty status.
    `;
  }
}

/* Replace the footer on every page */
const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML = `
    <div class="site-footer-inner">
      <strong class="site-footer-title">Vanguard Fleet Command</strong>

      <p><strong>© 2026 Vanguard Fleet. All Rights Reserved.</strong></p>

      <p>
        Vanguard Fleet is an unofficial, non-commercial Star Trek-inspired roleplaying organization.
        Star Trek, the Starfleet insignia, the United Federation of Planets and all related names,
        logos, characters, ships and trademarks are the property of CBS Studios Inc., Paramount
        Global and their respective rights holders. Vanguard Fleet is not endorsed by, sponsored by,
        licensed by or affiliated with CBS Studios, Paramount or any Star Trek rights holder.
      </p>

      <p>
        All original Vanguard Fleet artwork, graphics, medals, ribbons, website design, written
        content, lore and original intellectual property are © 2026 Vanguard Fleet unless otherwise
        noted. Unauthorized reproduction or redistribution of original Vanguard Fleet content
        without permission is prohibited.
      </p>

      <p class="site-footer-motto">Live Long. Write Boldly. Explore Together.</p>
    </div>
  `;
}
