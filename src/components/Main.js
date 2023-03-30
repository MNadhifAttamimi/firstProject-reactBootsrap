import Navigation from "./Navigation";
import Hero from "./Hero";
import Jurusan from "./Jurusan";
import Cardimg from "./../assets/pexels-los-muertos-crew-8908129(1).jpg";
import Cardimg2 from "./../assets/logo2.jpg";
import Cardimg3 from "./../assets/pexels-mesut-çiçen-13971630(1).jpg";
import Kegiatan from "./Kegiatan";
import KCard1 from "./../assets/kegiatan1.jpg";
import KCard2 from "./../assets/kegiatan2.jpg";

const Main = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5 text-black">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Jurusan image={Cardimg} judul="Nelayan" />
                    </div>
                    <div className="col-4">
                        <Jurusan image={Cardimg2} judul="Kereta" />
                    </div>
                    <div className="col-4">
                        <Jurusan image={Cardimg3} judul="Kota" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5 text-black">
                        <h1>Kegiatan Sekolah</h1>
                    </div>
                </div>
                <div className="row gap-3 mb-5">
                    <div className="col-12">
                        <Kegiatan image={KCard1} desk="Lari" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={KCard2} desk="Lapangan" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={KCard1} desk="Lari" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={KCard2} desk="Lapangan" />
                    </div>
                    <div className="col-12">
                        <Kegiatan image={KCard1} desk="Lari" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
