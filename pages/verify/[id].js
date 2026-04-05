import React from "react";
import VerifyPage from "@/components/Verify/VerifyPage";

const VerifyById = ({ certificateId }) => {
    return <VerifyPage initialCertificateId={certificateId || ""} />;
};

export async function getServerSideProps(context) {
    const { id } = context.params;

    return {
        props: {
            certificateId: typeof id === "string" ? id : "",
        },
    };
}

export default VerifyById;
