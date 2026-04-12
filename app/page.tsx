import Image from "next/image";
import AuthorLinks from "./_components/author-links";
import BookCard from "./_components/book-card";
import HeroWave from "./_components/hero-wave";
import ReviewMarquee from "./_components/review-marquee";

const siteUrl = "https://chaeyunchung.com";

const books = [
  {
    title: "그림자 마법사들:",
    subtitle: "사라진 그림자의 비밀",
    description:
      "그림자 마법사, ‘섀드’의 세계에서 기억을 잃은 채 깨어난 한 남자. 그리고 그의 과거와 맞닿아 있는 수상한 마법에 대한 이야기.",
    synopsis:
      "전 세계를 떠들썩하게 만든 두 달간의 연쇄 그림자 갈취 사건. 그리고 이로부터 한 달 후, 뉴욕의 고급 펜트하우스에서 기억을 잃은 채 깨어난 남자, '제론'. 그는 자신이 그림자를 다스리는 마법사인 ‘섀드’이며 무려 일곱 개나 되는 신분을 지닌 인물임을 알게 된다. 그 후 잃어버린 기억을 찾기 위해 자신의 신분 중 하나인 브룩스 교수가 머물렀다는 '유란섀드학교'로 향하는데, 과거의 흔적을 쫓던 중 결국 전혀 상상하지 못했던 진실을 마주하게 된다.",
    backdrop: "/Shads1-background.png",
    alt: "그림자 마법사들 1권 표지",
    href: "https://product.kyobobook.co.kr/detail/S000212055396"
  },
  {
    title: "그림자 마법사들 II:",
    subtitle: "마르세유의 비밀 조직",
    description:
      "또다시 시작되는 대결. 꼬리에 꼬리를 무는 수사를 통해 악당의 진정한 목적을 알아내고 자신의 순수한 가능성을 발견하는 주인공의 이야기.",
    synopsis:
      "검은 저택에서의 대결 이후 자취를 감춘 제론. 리안은 섀드가더들과 함께 제론의 행방을 조사하다, 어린 시절의 제론이 남긴 실마리를 따라 재능이 있는 고아들을 후원한다는 의문스러운 시설로 잠입하게 된다. 이어서 제론과 관련된 것으로 추정되는 의문의 단체인 ‘마르세유의 비밀 조직’ 그리고 고대의 제왕 아스카일이 창조한 ‘그림자의 숲’과 얽힌 비밀이 연이어 밝혀지고, 꼬리에 꼬리를 무는 수사 끝에 마침내 제론과 다시 마주하게 된 리안은 이제 그의 진정한 가능성을 발견하게 해 줄 새로운 싸움에 뛰어든다.",
    backdrop: "/Shads2-background.png",
    alt: "그림자 마법사들 2권 표지",
    href: "https://product.kyobobook.co.kr/detail/S000216098415"
  }
];

const reviews = [
  {
    quote: "대반전의 현장을 눈으로 목격하는 순간. 완벽하다를 외쳤다.",
    author: "fo*******"
  },
  {
    quote: "해리포터를 초반부터 진지한 분위기로 만들었다면 이런 소설이 되지 않았을까",
    author: "pr******"
  },
  {
    quote:
      "마지막 싸움이 시작되는 순간, 아직 이 책이 끝나지도 않았는데 벌써 2편을 궁금해하고 기대하고 있는 나를 보게 된다.",
    author: "s*****4"
  },
  {
    quote: "계속해서 궁금증을 유발하는 미스터리의 풀시퀀스가 빨리 2권을 기다리게 한다",
    author: "g*"
  },
  {
    quote:
      "해리포터 시리즈를 좋아하는 사람으로서 이러한 류의 소설에 대한 갈망이 있으셨던 분이라면 분명 좋아할 것이라고 생각합니다.",
    author: "h********i"
  },
  {
    quote: "촘촘한 세계관과 잘짜여진 스토리라서 해리포터 영화를 보듯 즐거운 시간이었다.",
    author: "h********i"
  },
  {
    quote:
      "저자의 첫 작품이라는 것이 믿기지 않을 정도로 완벽에 가까울 정도로 스토리가 깔끔하고 재미있었다.",
    author: "g*****5"
  },
  {
    quote: "그림자를 가지고 쓸 수 있는 최고의 소설!",
    author: "et*****"
  },
  {
    quote:
      "해리 포터를 좋아하고, 판타지를 좋아하는 친구들에게 자신 있게 추천할 수 있는 좋은 책이라고 단언하고 싶습니다.",
    author: "ki******"
  }
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chaeyun Chung | The Shads",
    url: siteUrl,
    description:
      "그림자를 부리는 신비로운 마법사의 세계, 그곳에서 펼쳐지는 새로운 모험과 대결. 정채연 작가의 판타지 추리 소설 The Shads 공식 웹사이트.",
    author: {
      "@type": "Person",
      name: "정채연",
      alternateName: "Chaeyun Chung"
    },
    inLanguage: "ko-KR"
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <HeroWave />
        <div className="hero__content">
          <h1>The Shads</h1>
          <p className="hero__lead">
            그림자를 부리는
            <br className="hero__lead-break hero__lead-break--mobile" /> 신비로운 마법사의 세계,
            <br className="hero__lead-break hero__lead-break--all" />
            그곳에서 펼쳐지는
            <br className="hero__lead-break hero__lead-break--mobile" /> 새로운 모험과 대결
          </p>
          <p className="hero__summary">
            매혹적인 그림자 마법의 세계에 범죄와 비밀의
            <br className="hero__summary-break" />
            {" "}
            어두운 색채를 더한 현대적인 판타지 추리 소설
          </p>
          <div className="hero__star" aria-hidden="true">
            ★
          </div>
        </div>
      </section>

      <section className="books" aria-label="Books">
        {books.map((book, index) => (
          <BookCard book={book} index={index} key={book.subtitle} />
        ))}
      </section>

      <section className="reviews" aria-labelledby="reviews-heading">
        <div className="section-heading">
          <h2 id="reviews-heading">Reviews</h2>
        </div>

        <ReviewMarquee reviews={reviews} />
      </section>

      <section className="author" aria-labelledby="author-heading">
        <div className="section-heading">
          <h2 id="author-heading">Author</h2>
        </div>

        <div className="author__content">
          <div className="author__intro-wrap">
            <div className="author__intro">
              <Image src="/chaeyun.png" alt="정채연 작가 프로필 사진" width={132} height={132} />
              <div>
                <h3>정채연</h3>
                <p className="author__name">Chaeyun Chung</p>
              </div>
            </div>
          </div>
          <p className="author__bio">
            어린 시절부터 다양한 판타지 및 추리 소설을 읽으며 작가의 꿈을 키웠다. 다채로운 해외
            배경을 녹여낸 현대적인 판타지 소설을 집필하며, 무한한 상상력에 미스터리의 쾌감을 더한
            소설을 지향한다. 첫 소설 《그림자 마법사들: 사라진 그림자의 비밀》을 시작으로, 신비로운
            세계관 속 그림자 마법사들의 이야기를 계속해서 확장해 나가고 있다.
          </p>
          <AuthorLinks />
        </div>
      </section>

      <footer className="site-footer">© 2026 Chaeyun Chung</footer>
    </main>
  );
}
