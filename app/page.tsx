import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-12 w-fit"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; 2024  <span className="font-bold mr-2"> CarePulse </span>   built by Wendel
            </p>
            <Link href="/?admin=true" >
            admin
            </Link>
          </div>
        </div>
      </section>

      <Image src="/assets/images/onboarding-img.png" width={1000} height={1000} alt="onboarding-image" className="side-img max-w-[50%]" />
    </div>
  );
}
