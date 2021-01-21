import React from "react";
import "./LegalDisclaimer.css";
import Modal from "../Modal";

const LegalDisclaimer = (props) => {
  return (
    <React.Fragment>
      {props.visible ? (
        <Modal onClose={props.closeModal}>
          <div className="legal-disclaimer__container">
            <div className="legal-disclaimer__title">Legal Disclaimer</div>
            <div className="legal-disclaimer__content">
              Some images, characters, artwork and places appearing or depicted
              on this website, even those based on real images, characters,
              persons, artwork or places are purely fictitious or the product of
              my imagination and are not to be associated with actual images,
              persons, artwork or places. Any association, similarity or
              resemblance to actual images, persons, artwork or places is purely
              coincidental. This website and the contents on this website are
              part of my professional portfolio and are purposely made to show
              and demonstrate a sample of my work as a Web Developer.{" "}
            </div>
          </div>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default LegalDisclaimer;
