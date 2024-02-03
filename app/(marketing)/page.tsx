import {Hero} from "@/app/(marketing)/_components/hero";
import {HeadingContact} from "@/app/(marketing)/_components/heading-contact";
import {ServicesSection} from "@/app/(marketing)/_components/services-section";


const MarketingPage = () => {
    return (
        <>
            <Hero/>

            <ServicesSection/>

            <HeadingContact/>
        </>
    );
}

export default MarketingPage;
