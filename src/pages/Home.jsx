import { useUser } from "../features/signup/useUser";
import { useService } from "../features/signup/useService";

const Home = () => {
  const { user } = useUser();
  const { service } = useService();
  const currentUser = user?.user;
  const currentService = service?.data[0];
  console.log(currentService);
  console.log(currentUser);
  return (
    <div>
      <h1>Home</h1>
      {/* <img src={currentService.avatar} alt="avatar" />
      <img src={currentService.imageCover} alt="avatar" /> <h2>Album</h2>
      {currentService.images.map((image, i) => (
        <img src={image} alt={`image ${i + 1}`} key={i} />
      ))} */}
    </div>
  );
};
export default Home;
