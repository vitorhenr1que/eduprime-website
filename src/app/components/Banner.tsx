import Image from "next/image";
import banner from '../../../public/Banner.png'
export default function Banner() {
return (
<section className="banner container sr-banner">
<Image src={banner} width={2000} alt="Banner principal EduPrime" loading="eager" quality={100}/>
</section>
);
}