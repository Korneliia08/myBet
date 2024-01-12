import { createSlice } from "@reduxjs/toolkit";

const stateOfPageReducer = createSlice({
  name: "stateOfPage",
  initialState: {
    stateOfPage: {
      header: {
        // todo menu
        nav: {
          logo: "",
          //   menu: {},
        },
        title: "Enjoy our barber services",
        backgroundImage: "",
        description:
          "Establish your new amazing look with Barbershop services! From haircuts to hot shaves, you can experience the best level of barbering in the area.",
      },
      aboutUs: {
        information: {
          title: "Who We Are",
          shortDescription:
            "Barbershop is a team of highly qualified barbers dedicated to offering the best value. We do this by providing high quality salon services for men and boys, in a warm, friendly atmosphere.",
          mainDescription:
            "Welcome to our distinguished hair salon, where we merge the artistry of hairstyling with a commitment to providing a personalized and exceptional experience. Our team comprises skilled and passionate stylists who are not only experts in their craft but also dedicated to staying abreast of the latest trends and techniques.\n" +
            "\n" +
            "Upon entering our contemporary space, you'll find an ambiance that invites relaxation and creativity. Our consultations are thorough, ensuring we understand your unique preferences and lifestyle, enabling us to tailor our services to complement your individuality. From classic cuts to avant-garde styles, our diverse range of services caters to every taste.\n" +
            "\n" +
            "Education is at the core of our philosophy, and our stylists undergo continuous training to master the latest industry innovations. This commitment allows us to offer a spectrum of services, including precision cuts, creative color treatments, and transformative styling.",
        },
        images: {
          mainImage: "",
          otherImages: {
            image1: "",
            image2: "",
            image3: "",
          },
        },
      },
      services: {
        title: "OUR BARBER SERVICES",
        subPage: {
          title: "Our Service",
        },
      },
      employees: {
        backgroundImage: "",
        title: "Our barbers",
        shortDescription:
          "We employ only highly qualified barbers who are not just professionals, but also enjoy maintaining the atmosphere of a classic barbershop.",
      },
      pricing: {
        title: "Our barber pricing",
        subPage: {
          title: "Our Pricing",
          shortDescription:
            "We employ only highly qualified barbers who are not just professionals, but also enjoy maintaining the atmosphere of a classic barbershop.",
        },
      },
      getInTouch: {
        backgroundImage: "",
        title: "Get in touch",
        shortDescription:
          "Leave your name and phone number, and we’ll contact you.",
      },
    },
  },
  reducers: {
    setState(state, action) {
      return { ...state, stateOfPage: action.payload };
    },
  },
});

export const { setState } = stateOfPageReducer.actions;
export default stateOfPageReducer.reducer;
