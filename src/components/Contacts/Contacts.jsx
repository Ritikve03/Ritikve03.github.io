import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  Wrap,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import emailjs from "@emailjs/browser";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import swal from "sweetalert";
import cot from "./contacts.module.css";
import { EmailIcon } from "@chakra-ui/icons";
import copy from "copy-to-clipboard";

export const Contact = ({ contact }) => {
  const [emailsending, emailLoading] = useState(false);
  const toast = useToast();
  const form = useRef();

  const handleGit = () => {
    window.open("https://github.com/Ritikve03", "_blank");
  };

  const handlelinked = () => {
    window.open("https://www.linkedin.com/in/ritik-verma-04b83b125/", "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailLoading(true);
    setTimeout(() => {
      emailLoading(false);
    }, 2000);

    emailjs
      .sendForm(
        "service_gh309g9",
        "template_0hob5st",
        form.current,
        "C_zzCKTMDoBITRzMC"
      )
      .then(
        (result) => {
          swal({
            title: "Sent",
            text: "You message hase been sent",
            icon: "success",
            button: "OK",
          });
        },
        (error) => {
          swal({
            title: "Some thing went wrong!",
            text: "Try again later",
            icon: "error",
            button: "OK",
          });
        }
      );

    // emailjs.sendForm('service_x8ah85s', 'template_0hob5st', form.current, 'C_zzCKTMDoBITRzMC').then((result) => {
    //         console.log(result.text);
    //         swal({
    //             title: "Sent",
    //             text: "You message hase been sent",
    //             icon: "success",
    //             button: "OK",
    //         });
    //     },
    //     (error) => {
    //         console.log(error.text);
    //         swal({
    //             title: "Some thing went wrong!",
    //             text: "Try again later",
    //             icon: "error",
    //             button: "OK",
    //         });
    //     }
    // );
    e.target.reset();
  };

  const copyToClipboard = () => {
    copy("tushitsaxena4@gmail.com");
    toast({
      title: "Email copyed",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container
      id="contact"
      ref={contact}
      maxW="100%"
      centerContent
      overflow="hidden"
    >
      <Flex w="90%" margin="auto">
        <Box
          backgroundImage={{
            base: "url('https://images.pexels.com/photos/15019156/pexels-photo-15019156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            md: "url('https://img.freepik.com/premium-photo/modern-dark-leather-desk-with-mockup-place-keyboard-black-background-top-view_67155-16371.jpg')",
          }}
          color="white"
          backgroundSize="100% 100%"
          borderRadius="lg"
          margin="auto"
          width="95%"
          m={{ sm: 4, md: 5, lg: 6 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4} margin="auto">
            <Wrap margin="auto" spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <div className={cot.main}>
                <div className={cot.one}>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Get in touch with me on
                  </Text>
                  <div className={cot.inform}>
                    {/* <VStack pl={0} spacing={3} alignItems="flex-start"> */}
                    <Button
                      textAlign="center"
                      padding="0% 6%"
                      border="none"
                      size="md"
                      height="40px"
                      bgColor="#090909"
                      cursor="auto"
                      width="240px"
                      variant="ghost"
                      id="contact-email"
                      color="white"
                      onClick={copyToClipboard}
                      _hover={{
                        // border: "1px solid #1C6FEB",
                        backgroundColor: "#090909",
                        // color: "blue",
                        cursor: "pointer"
                      }}
                      leftIcon={<MdEmail color="#1970F1" size="20px" />}
                    >
                      ritik.rv03@gmail.com
                    </Button>
                    <Button
                      textAlign="center"
                      padding="0% 4%"
                      border="none"
                      size="md"
                      bgColor="#090909"
                      height="40px"
                      cursor="auto"
                      width="220px"
                      variant="ghost"
                      color="white"
                      _hover={{
                        // border: "1px solid #1C6FEB",
                        // backgroundColor: "#ffffffb4",
                        // color: "blue",
                        cursor: "pointer"
                      }}
                      leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                    >
                      Bageshwar, Uttarakhand
                    </Button>
                    <Button
                      textAlign="center"
                      padding="0% 3%"
                      border="none"
                      size="md"
                      bgColor="#090909"
                      height="40px"
                      width="180px"
                      cursor="auto"
                      id="contact-phone"
                      variant="ghost"
                      color="white"
                      _hover={{
                        // border: "1px solid #1C6FEB",
                        // backgroundColor: "#ffffffb4",
                        // color: "blue",
                        cursor: "pointer"
                      }}
                      leftIcon={<MdPhone color="#1970F1" size="20px" />}
                    >
                      +91-8979421433
                    </Button>
                    {/* </VStack> */}
                  </div>
                  <div className={cot.linksto}>
                    <IconButton
                      aria-label="github"
                      border="none"
                      bgColor="black"
                      variant="ghost"
                      id="contact-github"
                      color="white"
                      size="lg"
                      onClick={handleGit}
                      isRound={true}
                      _hover={{ bg: "#004fb7",cursor: "pointer" }}
                      icon={<BsGithub size="30px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      border="none"
                      variant="ghost"
                      bgColor="black"
                      id="contact-linkedin"
                      color="white"
                      size="lg"
                      onClick={handlelinked}
                      isRound={true}
                      _hover={{ bg: "#004fb7" ,cursor: "pointer"}}
                      icon={<FaLinkedinIn size="28px" />}
                    />
                  </div>
                </div>
                <div className={cot.two}>
                  <Box m={18} >
                    <form id="name" ref={form} onSubmit={sendEmail}>
                      <VStack spacing={15}>
                        <FormControl>
                          <FormLabel mt={30} >Your Name</FormLabel>
                          <InputGroup mt={10} borderColor="#a3b0ff">
                            {/* <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            /> */}
                            <Input
                              type="text"
                              placeholder="Enter name"
                              name="from_name"
                              required
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup mt={10} borderColor="#a3b0ff">
                            {/* <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            /> */}
                            <Input
                              type="email"
                              placeholder="Enter email"
                              name="user_email"
                              required
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea mt={10}
                            borderColor="#a3b0ff"
                            name="message"
                            placeholder="Enter message"
                            required
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            isLoading={emailsending}
                            loadingText="Sending..."
                            variant="solid"
                            bg="#0D74FF"
                            type="submit"
                            className={cot.submitbt}
                            value="Send"
                            leftIcon={<EmailIcon />}
                            color="white"
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </div>
              </div>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
