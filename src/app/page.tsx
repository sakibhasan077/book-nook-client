import Banner from "@/components/home/Banner";
import BorrowingWork from "@/components/home/BorrowingWork";
import NewArrival from "@/components/home/NewArrival";
import Review from "@/components/home/Review";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArrival></NewArrival>
      <BorrowingWork />
      <Review />
    </div>
  );
}
