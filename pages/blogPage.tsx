import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineRead } from "react-icons/ai";

type blogPageProps = {
  title: string;
  author: string;
  image: string;
};

const blogPage = ({ title, author, image }: blogPageProps) => {
  return (
    <>
      <HStack
        mt={"2%"}
        // border={"2px solid"}
        justifyContent={"center"}
        position={"relative"}
        alignItems={"flex-start"}
        paddingTop={"10"}
        gap={10}
      >
        <HStack
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          position={"relative"}
        >
          <Box
            maxW={["96", "3xl"]}
            // border={"2px solid"}
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            borderColor={"gray"}
          >
            <Stack>
              <HStack border={"1px solid linear(to-r, green.200, pink.500)"}>
                <Avatar
                  size={"sm"}
                  src="https://i.pravatar.cc/300"
                  outline={"2px solid pink"}
                  outlineColor={useColorModeValue("purple", "pink")}
                  outlineOffset={"2px"}
                />
                <Text fontSize={"lg"} fontWeight={700} lineHeight={"0.8"}>
                  Sahil Kakwani
                </Text>
              </HStack>
              <Flex opacity={0.6}>
                <Text>cathalmacdonnacha.com</Text>
                <Text ml={4}>Dec 6, 2022</Text>
              </Flex>
            </Stack>
            <Flex mt={2} flexDirection={["column", "column", "column", "row"]}>
              <Stack pr={2} py={[1]}>
                <Flex alignItems={"center"}>
                  <AiOutlineRead />{" "}
                  <Text lineHeight={0.8} ml={4} fontWeight={"500"}>
                    7 min read
                  </Text>
                </Flex>
              </Stack>
            </Flex>
            <VStack>
              <Text fontSize={"4xl"} fontWeight={700}>
                {title}
                HIIIII
              </Text>
              <Box w={["auto", "3xl"]} height={"sm"}>
                <Image
                  src={image}
                  borderRadius={10}
                  p={"2"}
                  height={"100%"}
                  width={"100%"}
                />
              </Box>
              <Text textAlign={"justify"}>
                One of the less exciting things about being a Frontend Developer
                is having to handle error, empty and loading states. It may not
                be the most fun thing to do, but it's necessary in order to give
                your Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Non, quidem! Maiores iusto quas commodi, error tempora corrupti
                suscipit quis ab libero quaerat itaque quo ipsum, recusandae
                sed. Earum laboriosam ipsam soluta culpa natus eveniet non!
                Voluptates cupiditate enim doloremque veniam ipsam numquam
                itaque maxime et veritatis ab fugiat expedita perspiciatis
                laborum suscipit explicabo animi harum culpa unde molestiae
                sint, iure dicta recusandae rerum libero. Minus ab cupiditate
                odio delectus voluptatem maiores. Perferendis omnis excepturi
                nihil quae nostrum enim dolores quisquam odio culpa ipsum!
                Excepturi ipsam natus eaque, voluptatibus aliquam sapiente
                magni. Eveniet tenetur vero fuga commodi. Nemo maiores ab a
                temporibus inventore. Magni corrupti aut blanditiis cumque,
                velit tempore cupiditate delectus. Explicabo corrupti illum
                aliquid amet? Mollitia, vel sit exercitationem reiciendis illum
                neque temporibus facilis soluta dolorem incidunt eos, labore
                quas, officiis quam. Delectus, molestias labore eligendi
                suscipit veritatis fuga corrupti aliquid rerum explicabo illo
                atque excepturi non aliquam similique necessitatibus, nesciunt
                ratione dolores minima nostrum porro. Veritatis laboriosam
                fugiat voluptatum ducimus repellendus, dignissimos impedit
                pariatur porro deserunt labore asperiores vel nostrum illo nulla
                repudiandae quae mollitia officiis delectus adipisci. Eligendi
                tenetur, aut qui adipisci dignissimos incidunt, officia magni
                excepturi vero placeat voluptatibus fugiat recusandae earum
                sunt, sed aspernatur cum accusamus unde sapiente beatae possimus
                praesentium necessitatibus! Fugit saepe accusamus nisi, pariatur
                odio dicta ea aut quod dignissimos, consequuntur eum, soluta
                maxime ab. Blanditiis eligendi ex sint reiciendis natus corrupti
                consequatur, veritatis mollitia ipsam perspiciatis quibusdam
                itaque, minima, vero sapiente aliquam quod? Tempora recusandae
                natus, facilis laborum nihil inventore at amet officia, ipsam
                minus expedita ratione commodi molestiae. Ad tempora vel
                assumenda voluptatem impedit inventore eum nobis. Possimus quod
                error, expedita maxime tenetur quisquam excepturi corrupti ad
                odit eos praesentium nihil! Ratione accusantium officiis et nemo
                impedit excepturi sequi soluta voluptas at reiciendis corrupti,
                magni alias officia laudantium rem iusto dolore assumenda
                provident itaque magnam porro eligendi, suscipit voluptatum
                totam? Debitis aliquid natus quisquam nihil magni placeat
                officia, iste quod repudiandae, animi nisi fugiat error eum
                molestiae quidem eos aspernatur aliquam similique fugit culpa
                velit sequi perspiciatis. Labore culpa magni, nulla rem repellat
                laborum laboriosam velit reprehenderit repudiandae iure dolore
                quis nisi, optio incidunt, nesciunt harum? Perspiciatis, quidem
                deleniti. Voluptatum ex magnam dolorum ad nisi voluptatibus
                optio. Distinctio, laborum! Voluptatum aspernatur assumenda
                laborum harum enim vero magnam tempora impedit minima blanditiis
                ad dignissimos natus, nesciunt magni porro doloribus, quod
                ducimus consequatur sequi nulla autem? Suscipit esse amet
                soluta. Dolorum fugit animi omnis atque libero adipisci
                molestiae? Sequi optio repellat sint, autem, perspiciatis
                nostrum unde odit explicabo id praesentium placeat. Libero
                voluptas consequuntur molestias iure quidem sint cum fugit omnis
                illum nostrum rem, atque eius tempora ab tenetur harum
                repudiandae dignissimos sapiente quia impedit! Dignissimos
                asperiores voluptate quidem. Sit, maxime! Beatae, amet nisi.
                Fugiat architecto voluptate eum quis nam esse reprehenderit
                excepturi. Fugit, est quibusdam nisi ea facilis tempore saepe.
                Ipsa reiciendis quia tempora! Minima expedita quas dignissimos
                est vel quia totam animi sunt unde quod nihil eos repellat
                provident quasi mollitia perferendis magni, tenetur atque porro
                accusamus adipisci iusto? Tenetur amet officia nobis consectetur
                minima, suscipit alias, illum numquam dolore quam provident
                omnis officiis odio similique ab dolorum obcaecati repellendus
                rerum, fugiat fuga ipsum enim assumenda tempora? Deleniti
                repellat cum modi, omnis nulla possimus! Architecto iusto quidem
                commodi quas totam itaque sunt veniam ipsa, similique ea et
                saepe hic est exercitationem corrupti consequatur fuga. Iste
                earum aliquid similique quas minus nisi est quis inventore
                laudantium maiores? Libero ut voluptates amet. Voluptatum
                distinctio soluta odio officiis blanditiis omnis ducimus eum
                facere delectus quas in esse adipisci aliquam vero perferendis
                repellendus provident tempore id, impedit ipsam corrupti nulla
                voluptatibus modi. Excepturi impedit nihil quidem dolor debitis
                ratione quisquam, placeat nobis vitae laboriosam architecto
                illum similique ullam, cupiditate culpa id sit iste blanditiis.
                Laboriosam, numquam placeat nulla corrupti doloribus porro
                corporis voluptatem voluptate doloremque minima. Quasi
                asperiores ab facilis aliquid necessitatibus quo, repellendus
                consequuntur nemo quas nesciunt ducimus quibusdam ea.
                Dignissimos, voluptas architecto? Temporibus facere nam vel,
                ratione obcaecati dolore ut quisquam? Maxime esse dolor, rerum
                eveniet, recusandae veritatis consequatur, accusantium sint
                tempore officia aliquid vero vitae nihil doloribus. A reiciendis
                blanditiis debitis magni voluptatibus saepe officiis. Nobis
                sequi repudiandae laborum alias aut incidunt iste laudantium
                quas, amet cupiditate dicta veniam minus dolorem cum quia sint
                consequatur dolores dolore earum natus vero necessitatibus fuga
                accusamus? Sed rem sapiente officia cumque provident voluptatem
                architecto distinctio quibusdam doloribus. Voluptate quibusdam
                cum voluptatum harum vero adipisci, quod accusamus error nobis
                qui? Earum, saepe? Consequuntur facilis aliquam architecto
                voluptates odio beatae dignissimos nostrum. Fugit rem illo iusto
                distinctio. Dicta veniam perferendis sapiente, distinctio in
                amet possimus impedit nulla neque doloribus laudantium. Unde
                corporis aperiam consectetur cum fugiat, illo eum expedita
                laudantium dolorum? Id, nobis sed dolorum provident dolor velit
                repellat, architecto nam ullam adipisci vitae iste et
                praesentium minima perspiciatis libero ab necessitatibus! Soluta
                non aliquid eius explicabo mollitia nam atque. Corporis, et.
                Veniam numquam, autem nesciunt unde qui, nostrum suscipit
                consequuntur dignissimos quasi, itaque consectetur fugit vero
                cum quis repellendus illo. Incidunt architecto dolor, cumque
                culpa necessitatibus officia reiciendis assumenda praesentium.
                Eligendi rerum eos ullam facere hic provident a sequi culpa
                laudantium amet optio accusamus possimus iste incidunt sint illo
                dicta illum labore, ad aperiam minima aliquid expedita! Harum
                ea, excepturi quas non voluptas obcaecati pariatur? Quibusdam
                pariatur rerum, sequi dolore ipsa voluptate quam optio in
                consequuntur doloremque odit voluptas. Eius laudantium iusto,
                ullam asperiores placeat sequi iure aut illo labore, fugiat
                consequatur incidunt molestiae soluta ea harum? Sed dolorem
                numquam ipsa facilis. Cumque neque facilis ratione soluta.
                Libero at, placeat quis quam ex, mollitia illum quaerat quos
                modi dolores error aperiam ullam molestias eum autem nihil
                praesentium! Ducimus, provident officiis. A sint quo aperiam
                nihil nisi et nulla, blanditiis dolores ducimus eaque
                accusantium eos, magnam libero molestias? Ut eos quidem non
                voluptas! Tempore quia accusantium amet dolore impedit
                exercitationem saepe unde esse in! Exercitationem ab inventore
                officiis aliquid maxime perferendis? Eos sequi asperiores qui
                maxime. Deleniti at a aperiam odit, saepe, minus aliquam dolorum
                maxime qui cum quaerat autem minima illum quasi non
                necessitatibus veniam.
              </Text>
            </VStack>
          </Box>
        </HStack>
        <Box
          // height={"30vh"}
          border={"2px solid"}
          w={"20%"}
          position={"sticky"}
          top={"10"}
          display={"flex"}
          flexDirection={"column"}
          p={"4"}
          gap={"4"}
          justifyContent={"center"}
        >
          <HStack>
            <Avatar
              size={"sm"}
              src="https://i.pravatar.cc/300"
              outline={"2px solid pink"}
              outlineColor={useColorModeValue("purple", "pink")}
              outlineOffset={"2px"}
            />
            <Text fontSize={"lg"} fontWeight={700} lineHeight={"0.8"}>
              {author}
              fkmbkbm
            </Text>
          </HStack>
          <Button bg={"blue.300"}>FOLLOW</Button>
        </Box>
      </HStack>
    </>
  );
};
export default blogPage;
