import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Alert = (msg, bg) => {
  MySwal.fire({
    text: `${msg}`,
    timer: 2000,
    timerProgressBar: true,
    customClass: {
      container: "position-absolute",
      popup: `${bg}`,
    },
    toast: true,
    position: "top-right",
  });
};
