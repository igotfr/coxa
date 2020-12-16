import Image from "next/image";
import Link from "next/link";
//import { Container } from "next/app";
import { Flex, Container, Text, Heading, Card } from "theme-ui";

import Checkbox from "../components/Checkbox";
import CheckboxChecked from "../components/CheckboxChecked";
import CheckboxUnChecked from "../components/CheckboxUnChecked";

//import "./index.module.css";

export default function Home() {
  const inforacoesDosCards: Array<{link: string, alt: string, texto: string}> = [
    { link: "https://images.unsplash.com/photo-1540916121193-e7f39288e419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", alt: "Profile Picture", texto: "coxinha" },
    { link: "https://img.elo7.com.br/product/zoom/258B431/painel-em-lona-praia-hawaii-lona-fosca-alta-resolucao-painel-lona-aniversario.jpg", alt: "Other Profile Picture", texto: "Praia" },
    { link: "https://img.elo7.com.br/product/zoom/258B431/painel-em-lona-praia-hawaii-lona-fosca-alta-resolucao-painel-lona-aniversario.jpg", alt: "Other Profile Picture", texto: "praia" },
    { link: "https://img.elo7.com.br/product/zoom/258B431/painel-em-lona-praia-hawaii-lona-fosca-alta-resolucao-painel-lona-aniversario.jpg", alt: "Other Profile Picture", texto: "praia" },
    { link: "https://img.elo7.com.br/product/zoom/258B431/painel-em-lona-praia-hawaii-lona-fosca-alta-resolucao-painel-lona-aniversario.jpg", alt: "Other Profile Picture", texto: "praia" }
  ];

  const estiloLogo = { fontSize: "1.2rem", fontFamily: "Arial", color: "white", cursor: "pointer" };
  const estiloItensNav = { ...estiloLogo, display: "block", marginLeft: "10px", padding: "10px" };

  return (
    <>
    <div style={{ backgroundImage: "url(/lsd.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
    {/*<Image
      alt="Mountains"
      src="/lsd.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <style jsx>{`
      body {
        background-color: "blue";
      }
    `}</style>*/}

    <Flex as="header" sx={{
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",

      backgroundColor: "#1d1e20",
      padding: "15px",
      position: "fixed",
      top: 0,
      overflow: "hidden",
      zIndex: 1,
      width: "100%"
      /*margin: "0 auto",
      left: 0,
      right: 0,
      padding: "0 0 0 0",*/
    }}>
      <Link href="/"><Text sx={ estiloLogo }>Logo</Text></Link>

      <Flex as="nav">
        <Link href="./a"><Text sx={ estiloItensNav }>Sobre</Text></Link>
        <Link href="./a"><Text sx={ estiloItensNav }>Produtos</Text></Link>
        <Link href="./a"><Text sx={ estiloItensNav }>Contato</Text></Link>
      </Flex>
    </Flex>

    <Heading as="h1" sx={{ textAlign: "center", /*position: "relative",*/ paddingTop: 150, paddingBottom: 100 }}>Section</Heading>

    <Flex as="section"
      sx={{
        flexWrap: "wrap",
        /*justifyContent: "space-around",
        border: "1px solid black",*/
        borderRadius: 5,
        boxShadow: "0px 0px 24px 9px rgba(0,0,0,0.24)",

        backgroundColor: "white",
        //position: "sticky",
        zIndex: 1,
        overflow: "hidden",
        padding: 10,
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >

      {inforacoesDosCards.map((el, i) => (
        <Card
          key={i}
          sx={{
            maxWidth: 256,
            flex: "1 1 200px",
            margin: 10,
            borderRadius: 5,
        }}>
          <Container sx={{ boxShadow: "0px 0px 24px 9px rgba(0,0,0,0.10)" }}>
            <Image src={el.link} width="800" height="800" alt={el.alt} sx={{ borderRadius: 20 }} />
          </Container>

          <Text as="p" sx={{ fontSize: "1.2rem", fontFamily: "Arial" }}>{el.texto}</Text>
        </Card>
      ))}
    </Flex>

    <div style={{ paddingBottom: 100 }}></div>
    </div>


  {/*<Checkbox sx={{ color: white }}>
    <CheckboxChecked
      sx={{ backgroundColor: "blue" }}
    >
      V
    </CheckboxChecked>

    <CheckboxUnChecked>

    </CheckboxUnChecked>

    click me

  </Checkbox>*/}
  </>
  );
}