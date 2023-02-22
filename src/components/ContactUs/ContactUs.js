import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import photo_send from "../../assets/img/photo_send_2.png";

import styles from "./styles";
import FormComponent from "./FormComponent";

const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography variant="h2">mind! contact us</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
            sagittis eget facilisi in in urna tristique risus. Tortor
            consectetur nulla pretium malesuada porttitor.
          </Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <MailOutlineIcon sx={styles.imgInfo} />
                email us
              </Box>
              <Box sx={styles.titleValue}>support@gmail.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <LocalPhoneIcon sx={styles.imgInfo} />
                phone us
              </Box>
              <Box sx={styles.titleValue}>+012 (345) 67 89</Box>
            </Box>
          </Box>
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
          <FormComponent />
        </Box>
        <Box>
          <Box component="img" src={photo_send} sx={styles.photo} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
