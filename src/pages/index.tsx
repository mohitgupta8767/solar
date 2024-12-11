import BaseLayout from "@/components/BaseLayout";
import CustomHead from "@/components/Head";
import Icon from "../../public/favicon.ico";

export default function Home() {
  return (
    <BaseLayout>
      <CustomHead
        title="Solar Price Intelligence AI Platform"
        description="Solar PV"
        iconHref={Icon}
      />
    </BaseLayout>
  );
}
