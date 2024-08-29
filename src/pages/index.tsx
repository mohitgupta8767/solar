import BaseLayout from "@/components/BaseLayout";

export default function Home() {
  
  return (
   <BaseLayout>
   {/* <div>Home</div> */}
      <iframe
      src="https://www.w3schools.com"
      title={"title"}
      style={{ width: '100%', height: '500px', border: 'none' }}
      sandbox="allow-scripts allow-same-origin"
    />
   </BaseLayout>
  );
}
