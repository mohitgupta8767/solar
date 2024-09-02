import BaseLayout from "@/components/BaseLayout";

export default function About() {
  return (
    <BaseLayout>
      <div >
        <div className="card">
          <div className="container">
            <h4 className="card_title">Overview</h4>
            <p>A venture by the Adani Group, Adani AI Labs uses AI and optimization techniques to solve complex business challenges to unlock value and foster unique competitive advantages.</p>
            <br />
            <h4 className="card_title">Website</h4>
            <a href="https://www.adani.com/" target="_blank" rel="noopener noreferrer">https://www.adani.com/</a>
            <br />
            <br />
            <h4 className="card_title">Headquarters</h4>
            <p>Kolkata, West Bengal</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
