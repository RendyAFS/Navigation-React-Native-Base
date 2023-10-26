import { Heading, Center, Text, Image, Box } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
    // Get the params
    const params = route.params.item;
    return (
        <>
            <Header title={"News"} withBack="true" />
            <Center flex={1} p={"4"}>
                <Heading>News Detail</Heading>
                <Box flex={1} mr={"4"}>
                    <Image
                        source={{ uri: params.image }}
                        width={400}
                        height={400}
                        alt="Image Data"
                    />
                    <Text textAlign={"center"}>{params.title}</Text>
                </Box>
            </Center>
        </>
    );
};

export default NewsDetail;