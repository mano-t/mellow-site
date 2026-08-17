"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const navItems = [
  ["Concept", "#concept"],
  ["Service", "#service"],
  ["Style Book", "#stylebook"],
  ["Voice", "#voice"],
  ["FAQ", "#faq"],
];

const empathyLines = [
  "クローゼットには服があるのに、着たい服がない。",
  "これは若すぎるかな、と手を止めてしまう。",
  "体型が目立ちそうで、結局いつもの服を選ぶ。",
  "鏡の前で「まあ、これでいいか」と思ってしまう。",
];

const features = [
  ["01", "すべてオンライン", "自宅からスマホひとつで利用できます。"],
  ["02", "手持ちの服も活用", "すべて買い替える必要はありません。今持っている服を活かしたコーディネートもご提案します。"],
  ["03", "あなた専用", "「40代ならこれ」ではなく、あなたなら、これ。一人ひとり違うスタイルをご提案します。"],
];

const scenes = [
  ["仕事の日", "いつものジャケットなのに、少し自信を持って歩ける。", "/assets/images/lifestyle-work.webp"],
  ["友人とのランチ", "「今日なんか素敵だね。」その一言がちょっと嬉しい。", "/assets/images/lifestyle-lunch.webp"],
  ["久しぶりのデート", "若く見せるのではなく、今の自分だから似合う服で。", "/assets/images/lifestyle-date.webp"],
  ["何でもない休日", "誰にも会わない日なのに、鏡の前でちょっと嬉しくなる。", "/assets/images/lifestyle-weekend.webp"],
];

const steps = [
  [
    "STEP 01",
    "無料スタイル診断",
    "好み・悩み・ライフスタイルなど、簡単な質問に回答。",
    "/assets/images/how-step-01.png",
    "スマートフォンで無料スタイル診断に回答する大人女性",
  ],
  [
    "STEP 02",
    "オンラインヒアリング",
    "スタイリストがあなたのお悩みや理想を伺います。",
    "/assets/images/how-step-02.png",
    "オンラインでスタイリストと相談する大人女性",
  ],
  [
    "STEP 03",
    "あなた専用スタイルBOOKをお届け",
    "おすすめコーデ、カラー、アイテム選びなどをまとめたStyle Bookをオンラインでお届けします。",
    "/assets/images/how-step-03.png",
    "タブレットでパーソナルStyle Bookを見る大人女性",
  ],
];

const styleBookItems = [
  "あなたに似合うカラー",
  "おすすめシルエット",
  "5つのコーディネート例",
  "手持ち服の活用方法",
  "買い足すならおすすめのアイテム",
  "靴・バッグ・アクセサリーの合わせ方",
];

const testimonials = [
  ["43歳｜会社員", "服を買っても着ない理由が初めてわかりました。", "似合うものだけではなく、生活スタイルまで考えてもらえたので、実際に着る服が増えました。"],
  ["48歳｜自営業", "娘に“今日なんかいいね”と言われたのが嬉しかったです。", "派手に変わったわけではないのに、自分でも鏡を見るのが少し楽しくなりました。"],
  ["39歳｜会社員", "若く見せなくていいんだ、と思えました。", "今は「今の自分に似合う服」を探すのが楽しいです。"],
];

const includes = [
  "無料スタイル診断",
  "オンラインヒアリング 45分",
  "パーソナルスタイル分析",
  "オリジナルStyle Book",
  "5コーデ提案",
  "手持ち服アドバイス",
  "7日間チャット相談",
];

const faqs = [
  ["おしゃれに詳しくなくても大丈夫ですか？", "もちろんです。「何が似合うかわからない」という方のためのサービスです。"],
  ["服をたくさん買う必要がありますか？", "ありません。手持ちの服を活かしながら、必要な場合のみ買い足しアイテムをご提案します。"],
  ["体型に自信がありません。", "体型を隠すことだけを目的にするのではなく、今のあなたが自然に素敵に見えるバランスをご提案します。"],
  ["40代・50代でも利用できますか？", "もちろんです。mellowは、大人になって服選びに迷い始めた女性を主な対象としています。"],
];

function CtaButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className="cta-button" href="#diagnosis">
      <span>{compact ? "無料診断へ" : "無料スタイル診断を受ける"}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function ImageFrame({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className={`image-frame ${className}${missing ? " image-frame-placeholder" : ""}`} data-slot={label}>
      {!missing ? (
        <img
          src={src}
          alt={alt}
          width="1200"
          height="1500"
          loading={priority ? undefined : "lazy"}
          decoding="async"
          onError={() => setMissing(true)}
        />
      ) : (
        <div className="image-placeholder" role="img" aria-label={`${alt}の差し替え用プレースホルダー`}>
          <span>{label}</span>
        </div>
      )}
    </figure>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -56px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="mellow トップへ">mellow</a>
          <nav id="mobile-navigation" className={`global-nav${menuOpen ? " is-open" : ""}`} aria-label="メインナビゲーション">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <CtaButton compact />
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">PERSONAL STYLING FOR YOUR NOW</p>
              <h1 id="hero-title">
                <span className="text-line">最近、</span>
                <span className="text-line">鏡を見る時間が</span>
                <span className="text-line">少し短くなって</span>
                <span className="text-line">いませんか。</span>
              </h1>
              <div className="hero-text">
                <p>何を着ても、なんとなくしっくりこない。</p>
                <p>昔好きだった服も、流行の服も、今の私には少し違う気がする。</p>
                <p><strong>あなたがおしゃれじゃなくなったからではありません。</strong></p>
                <p>今のあなたに似合うものを、まだ見つけていないだけ。</p>
              </div>
              <p className="brand-message">
                <span>「今日の私、</span>
                <span>ちょっと好きかも。」を、</span>
                <span>もう一度。</span>
              </p>
              <p className="hero-sub">大人女性のための<br />オンライン・パーソナルスタイリング</p>
              <div className="cta-wrap">
                <CtaButton />
                <p>所要時間：約3分｜オンライン完結</p>
              </div>
            </div>
            <ImageFrame
              className="hero-image"
              src="/images/mellow-hero.png"
              alt="鏡の前で服を整えながら穏やかに微笑む40代前後の日本人女性"
              label="hero-mirror.webp"
              priority
            />
          </div>
        </section>

        <section className="section empathy" id="concept" aria-labelledby="empathy-title">
          <div className="container split-layout">
            <div data-reveal>
              <p className="section-label">From doubt to recognition</p>
              <h2 id="empathy-title">
                <span className="text-line">こんなこと、</span>
                <span className="text-line">ありませんか？</span>
              </h2>
            </div>
            <div className="empathy-list" data-reveal>
              {empathyLines.map((line, index) => (
                <p className="empathy-row" key={line}><span>{String(index + 1).padStart(2, "0")}</span>{line}</p>
              ))}
              <div className="quiet-pause" aria-hidden="true" />
              <p className="empathy-closing">でも本当は、<br /><strong>「これでいい」ではなく、<br />「これがいい」と思える服を着たい。</strong></p>
              <p className="empathy-origin">mellowは、そんな気持ちから生まれました。</p>
            </div>
          </div>
        </section>

        <section className="section reframe" aria-labelledby="reframe-title">
          <div className="container reframe-inner" data-reveal>
            <p className="section-label">A quiet turn</p>
            <h2 id="reframe-title">似合わなくなったのではありません。</h2>
            <p className="large-statement">
              <span>「似合う」が、</span>
              <span>変わっただけ。</span>
            </p>
            <div className="narrow-copy">
              <p>20代には20代の魅力があるように、40代には40代の魅力があります。</p>
              <p>体型も、髪も、肌も、暮らし方も変わる。だったら、<strong>似合う服だって変わって当然です。</strong></p>
              <p>昔の自分に戻る必要はありません。今のあなたを一番素敵に見せる服を、今のあなたと一緒に探します。</p>
            </div>
          </div>
        </section>

        <section className="section service" id="service" aria-labelledby="service-title">
          <div className="container media-layout">
            <ImageFrame src="/assets/images/service-consultation.webp" alt="オンラインでスタイリストと相談する大人女性" label="service-consultation.webp" />
            <div className="service-copy" data-reveal>
              <p className="section-label">Personal, not prescribed</p>
              <h2 id="service-title">あなたのためだけの<br />オンライン・パーソナルスタイリング。</h2>
              <p>mellowでは、年齢や流行だけであなたの服を決めません。</p>
              <p>顔立ち、体型、好きな色、普段の生活、仕事、休日の過ごし方。そして、<strong>「どんな自分でいたいか。」</strong></p>
              <p>そこまで聞いてから、あなたに似合うスタイルをご提案します。</p>
            </div>
          </div>
          <div className="container feature-row" data-reveal>
            {features.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section special" aria-labelledby="special-title">
          <div className="container special-layout">
            <div data-reveal>
              <p className="section-label">Only for you</p>
              <h2 id="special-title">
                <span className="text-line">誰かの正解ではなく、</span>
                <span className="text-line">あなたの「似合う」を</span>
                <span className="text-line">見つけたい。</span>
              </h2>
              <p>流行っているから。細く見えるから。若く見えるから。</p>
              <p>それだけで服を選ぶのではなく、あなたが鏡を見た瞬間、<strong>「あ、これ好き。」</strong>と思えること。</p>
            </div>
            <ImageFrame
              className="special-image"
              src="/assets/images/special-treatment.webp"
              alt="あなた専用に選ばれた服や色見本をスタイリストが整えている様子"
              label="special-treatment.webp"
            />
          </div>
        </section>

        <section className="section emotion-change" aria-labelledby="change-title">
          <div className="container">
            <div className="wide-heading" data-reveal>
              <p className="section-label">Before to after</p>
              <h2 id="change-title">服が変わると、<br />鏡の中の自分との関係が少し変わる。</h2>
            </div>
            <div className="before-after" data-reveal>
              <article className="before-card">
                <p className="compare-label">BEFORE</p>
                <p>「何を着ればいいかわからない。」</p>
                <p>「また同じ服を買ってしまった。」</p>
                <p>「写真に写るのがちょっと嫌。」</p>
              </article>
              <div className="transition-line" aria-hidden="true" />
              <article className="after-card">
                <p className="compare-label">AFTER</p>
                <p>「この色、私にも似合うんだ。」</p>
                <p>「久しぶりに服を選ぶのが楽しい。」</p>
                <strong>「今日の私、ちょっといいかも。」</strong>
              </article>
            </div>
            <p className="small-goal" data-reveal>大きく変わらなくていい。<br />その小さな変化が、mellowの目指すゴールです。</p>
          </div>
        </section>

        <section className="section lifestyle" aria-labelledby="lifestyle-title">
          <div className="container section-head" data-reveal>
            <p className="section-label">Everyday scenes</p>
            <h2 id="lifestyle-title">特別な日のためだけではありません。</h2>
          </div>
          <div className="container scene-grid" data-reveal>
            {scenes.map(([title, body, src]) => (
              <article key={title}>
                <ImageFrame src={src} alt={`${title}の装いを楽しむ大人女性`} label={src.split("/").pop() ?? "lifestyle.webp"} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <p className="container lifestyle-closing" data-reveal>おしゃれは、誰かに見せるためだけのものではありません。</p>
        </section>

        <section className="section how" aria-labelledby="how-title">
          <div className="container section-head how-head" data-reveal>
            <p className="section-label">A gentle start</p>
            <h2 id="how-title">
              <span className="text-line">スマホひとつ。</span>
              <span className="text-line">3STEPで始められます。</span>
            </h2>
          </div>
          <ol className="container step-list" data-reveal>
            {steps.map(([label, title, body, src, alt]) => (
              <li key={label}>
                <ImageFrame
                  className="step-image"
                  src={src}
                  alt={alt}
                  label={src.split("/").pop() ?? "how-step.png"}
                />
                <div className="step-copy">
                  <span>{label}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                </li>
              ))}
            </ol>
        </section>

        <section className="section stylebook" id="stylebook" aria-labelledby="stylebook-title">
          <div className="container media-layout reverse">
            <div className="stylebook-copy" data-reveal>
              <p className="section-label">Your style book</p>
              <h2 id="stylebook-title">あなただけの「似合う」を、一冊に。</h2>
              <ul>
                {styleBookItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>買い物中にスマホで確認できるので、<strong>「結局、何を買えばいいの？」</strong>が減っていきます。</p>
            </div>
            <div className="book-mockup" aria-label="mellow Style Bookのモックアップ" data-reveal>
              <div className="book-cover">
                <span>mellow</span>
                <strong>Personal Style Book</strong>
                <small>for your now</small>
              </div>
              <div className="book-page">
                <p>COLOR</p>
                <div className="swatches"><span /><span /><span /><span /></div>
                <p>SILHOUETTE</p>
                <div className="mock-lines"><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section voice" id="voice" aria-labelledby="voice-title">
          <div className="container section-head" data-reveal>
            <p className="section-label">Voice</p>
            <h2 id="voice-title">mellowを体験した方の声</h2>
          </div>
          <div className="container testimonial-grid" data-reveal>
            {testimonials.map(([profile, quote, body]) => (
              <article key={profile}>
                <p>{profile}</p>
                <h3>「{quote}」</h3>
                <small>{body}</small>
              </article>
            ))}
          </div>
          <p className="container demo-note">※ポートフォリオ用デモ表示です。</p>
        </section>

        <section className="section price" id="diagnosis" aria-labelledby="price-title">
          <div className="container price-panel" data-reveal>
            <div>
              <p className="section-label">First step</p>
              <h2 id="price-title">
                <span className="text-line">まずは、</span>
                <span className="text-line">今のあなたを</span>
                <span className="text-line">知るところから。</span>
              </h2>
              <p className="plan-name">mellow Personal Styling</p>
              <p className="price-value">¥9,800<span>（税込）</span></p>
            </div>
            <div>
              <ul className="include-list">
                {includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="cta-wrap">
                <CtaButton />
                <p>無理な勧誘はありません。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div data-reveal>
              <p className="section-label">FAQ</p>
              <h2 id="faq-title">よくあるご質問</h2>
            </div>
            <div className="faq-list" data-reveal>
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="faq-item" key={question}>
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{question}</span>
                      <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      hidden={!isOpen}
                    >
                      <p>{answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="container final-inner" data-reveal>
            <p className="section-label">A small decision</p>
            <h2 id="final-title">もう一度、<br />自分にときめいてみませんか。</h2>
            <div className="final-copy">
              <p>誰かに褒められるためでも、若く見せるためでもありません。</p>
              <p>朝、服を着て、鏡を見たとき。ほんの少しだけ、<strong>「今日の私、好きかも。」</strong>と思える。</p>
              <p>そんな日を、ひとつ増やすために。</p>
            </div>
            <p className="brand-message">
              <span>「今日の私、</span>
              <span>ちょっと好きかも。」を、</span>
              <span>もう一度。</span>
            </p>
            <div className="cta-wrap">
              <CtaButton />
              <p>オンライン完結｜約3分</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="logo" href="#top" aria-label="mellow トップへ">mellow</a>
            <p>Personal Styling for Your Now</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <a href="#concept">Concept</a>
            <a href="#service">Service</a>
            <a href="#diagnosis">Price</a>
            <a href="#faq">FAQ</a>
          </nav>
          <small>© 2026 mellow. Portfolio Demo.</small>
        </div>
      </footer>
    </>
  );
}
