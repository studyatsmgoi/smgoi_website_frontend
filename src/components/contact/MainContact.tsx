import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function MainContact() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap mt-4">
      <div className="flex-1 pr-4 mt-6">
        <ContactInfo />
      </div>
      <div className="flex-1 mt-5">
        <ContactForm />
      </div>
    </div>
    </div>
  );
}

export default MainContact;
