import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";
import { QueryClient } from "@tanstack/react-query";
import { getUser } from "@modules/user/service";
import PageLayout from "@modules/page-layout/components/PageLayout/PageLayout";
import HomePage from "@modules/home/HomePage";

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["user"], getUser);

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

const Home = () => {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
};

export default Home;
