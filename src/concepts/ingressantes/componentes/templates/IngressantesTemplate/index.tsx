import React from "react";
import IngressantesForm from "../../organisms/IngressantesForm";
import IngressantesHeader from "../../organisms/IngressantesHeader";

const IngressantesTemplate: React.FC = () => {
  return (
    <div className="bg-white fixed inset-0 m-auto w-72 h-[26.5rem] rounded-md border-blue-200 border-[1px]">
      <IngressantesHeader />
      <IngressantesForm />
    </div>
  );
};

export default IngressantesTemplate;
