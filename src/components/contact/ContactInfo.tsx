import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import BlurFade from "../ui/blurfade";

function ContactInfo() {
  return (
    <BlurFade duration={1} amount={0.3}>
    <Card className="p-4 md:p-6 lg:p-8">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl lg:text-2xl">Contact Information</CardTitle>
        <CardDescription className="text-sm md:text-base lg:text-lg">Get in touch with us</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row justify-center items-start md:items-center text-sm md:text-base lg:text-lg p-4">
        <p className="mb-4 md:mb-0">
          Feel free to reach out to us at Sankat Mochan Group of Institutions. For inquiries, admissions, or any assistance, contact us at
          <a href="mailto:contact@smgoi.com" className="text-blue-500"> contact@smgoi.com</a> or call <a href="tel:+919198634977" className="text-blue-500">+91 9198634977</a>. Our team is here to help you
          navigate the educational journey with us. Visit our campus at Kariya Bajhna, Sultanpur, Uttar Pradesh to experience firsthand the nurturing
          environment we offer. We look forward to connecting with you and being a part of your educational aspirations.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row gap-4 p-4">
        <a href="mailto:contact@smgoi.com" className="w-full md:w-auto">
          <Button className="flex items-center justify-start gap-2">
            <MdEmail className="h-5 w-5" />
            contact@smgoi.com
          </Button>
        </a>
        <a href="tel:+919198634977" className="w-full md:w-auto">
          <Button className="flex items-center justify-start gap-2">
            <IoCallSharp className="h-5 w-5" />
            +91 9198634977
          </Button>
        </a>
        <a href="tel:+918960788977" className="w-full md:w-auto">
          <Button className="flex items-center justify-start gap-2">
            <IoCallSharp className="h-5 w-5" />
            +91 8960788977
          </Button>
        </a>
        <a href="https://maps.app.goo.gl/DyHbWwPVJ4AettWbA" className="w-full md:w-auto">
          <Button className="flex items-center justify-start gap-2">
            <FaLocationDot className="h-5 w-5" />
            Visit Us
          </Button>
        </a>
      </CardFooter>
    </Card>
    </BlurFade>
  );
}

export default ContactInfo;
