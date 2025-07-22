import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const StoryUI = () => {
  const storyRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(storyRef.current, {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%", // when the top of the element hits 80% of viewport
          toggleActions: "play none none none", // only play once
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
      });
    }, storyRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      className="w-full px-4 sm:px-12 py-10 bg-gradient-to-b from-yellow-100 via-orange-100 to-pink-100 text-gray-800 font-mono"
      ref={storyRef}
    >
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-10 border border-yellow-300">
        <h1 className="text-center text-4xl sm:text-5xl font-bold underline text-yellow-600 mb-8">
          Shubhreet
        </h1>
        <div className="text-justify text-base sm:text-lg leading-relaxed space-y-6">
          Yaad hai gb jab ham pehli baar mile the? Ye kahani kitni baar sunayi
          hai na maine. Maine hi bheja tha uske baad tumne kaha tha ki kyu
          message kiya hai maine. Phir tumne puchha tha ki koi bandi banani hai
          kya 😂. Tab maine socha tha gb ki iss ladki ke saath to mera kabhi
          kuchh nahi ho sakta. Guess I was wrong. And honestly I am happy ki I
          was wrong. Itne sare pyare moments achhe achhe moments bitane ko nahi
          milte meri gb. I still remember tumne kaise propose kiya tha mujhe.
          "Mujhe tumse bade dino se kuchh kehna hai", maine puchha kya, mujhe
          thoda sa bhi idea nahi tha gb ki tum propose hi kar dogi 😂. Phir
          tumne bola aaram se alag alag karke "I" "Love" "You". I like you bhi
          nahi bola gb seedha I Love you. Itna pyar hai kya mujhse buddhu. Uske
          baad hi tum shadi ki baat karne lagi gb and at first I was nervous gb
          ki kya ye sahi hai. Kya itni jaldi itna sab decide kar lena chahiye.
          Isliye yaad hai gb maine kaha tha ki pehle mere saath 6 mahine bita lo
          uske baad decide karna. And I still remember gb jab hamare 6 mahine
          saath me ho gaye the gb tab tumne mere se kaha tha ki ab to bita liye
          na 6 mahine, mujhe abhi bhi tum chahiye. Mai bada emotional ho gaya
          tha meri gb. Mujhe itna achha laga tha na gb ki kya batau. Bahut bahut
          khushi hui thi.
          <br />
          Jab hamne pehli baar vc kiya tha gb, I still remember ki kitne nervous
          the ham. Tum mujhe apni pic kabhi bina filter ke nahi bhejti thi and
          mai baar baar bolta tha ki bina filter ke bhejo gb. I wanted to see ki
          meri gb asli me bina filter ke kaisi hai. Tumhe apne looks pe
          confidence nahi tha gb, tumhe lagta tha ki mai chala jaunga agar mujhe
          tum achhi nahi lagi to. But you didn't know gbb ki mere liye tum sabse
          pyari sabse sundar ban chuki thi. Mujhe real reetu dekhni thi, filter
          wali to kayi logo ne dekhi hai, mujhe reetu ka har side dekhna tha.
          Maine kaha tha na gb ki mujhe tumhe soke uthte hue, sone se pehle,
          ghar ke kaam karte hue, har time dekhna hai. Pehli baar vc me ham itne
          nervous the gb lekin meri pyari si gb ne sambhal liya. Mujhe yaad hai
          tum confident thi gb and tumhe dekh ke mai bhi confident ho gaya.
          Tumse zyada to apne looks ko leke unconfident mai tha gb ki kahin mai
          achha laga ki nahi. Jahan tum ho wahan tumhare paas itne achhe options
          hai gb, mere jaise aur mere se achhe kayi mil jayenge and mai abhi bhi
          insecure hu gb. Lekin mujhe ab fark nahi padta gb kyuki tum sirf meri
          ho 😁. <br />
          Maine hamare sare moments, jo jo pics tumne mujhe bheji thi gb sabko
          kitna sambhal ke rakha tha. Even wo pic gb yaad hai jab maine kaha tha
          ki mujhe doubt hai ki tum ladka ho ya ladki ho tab tumne mujhe bheji
          thi apni pic, mask lagaye hue and tum tuition jaa rahi thi. Maine wo
          pic bhi sambhal ke rakhi thi gb. Lekin mera phone jab reset ho gaya to
          sari pics delete ho gayi meri gb. Mujhe bada dukh hua gb ☹️. Aur tum
          bhi buddhu thi gb ki snap pe chat karti thi, agar shuru se hi whatsapp
          pe karti to hamare sare chats secured rehte na aur delete nahi hote
          🙄. <br />
          Mujhe tab bahut dar laga tha gb jab tumne kaha tha ki tumhare gharwale
          rishta dekh rahe hai gb and mai jana nahi chahta tha gb wo 6 maine
          kahin dur lekin mai dar gaya tha gb ki maybe hamara time saath me
          khatam hone wala hai gb and I did not want ki tumhe mujhe chhorne me
          dikkat ho kyuki tumhe meri aadat lag chuki thi gb and honestly mujhe
          bhi lag gayi thi. Tumne kaha tha ki tum mana logi gb sabko lekin phir
          tum kabhi kabar haar manke aa jati thi na gb and mujhe jane ko bolti
          thi, mai bahut dar jata tha gb and uss time mujhe wo ek dusre se dur
          rehna hi sahi laga meri gb. I really missed you na meri gb. I missed
          you so so soo much. Mai kitna akela tha gb sochta tha ki tum kya kar
          rahi hogi meri gb. Sochta tha ki meri yaad aati bhi hogi ki nahi.
          Sochta tha ki kash ye sab nahi hota. <br />
          Lekin ab tum ho mere paas meri gb and mai sach me bahut bahut khush hu
          meri gb. Mai bata nahi sakta meri gb ki kitne mahino ka akelapan
          tumhare aane se shant ho gaya meri gb. Mujhe bas tum chahiye meri gb
          aur tumhara sara pyar, sara attention, sara time sab kuch jo jo tumse
          related hai meri gb. Mai jealous hota hu meri gb jab tum sundar banke
          bahar jati ho kyuki mai chahta hu ki wo sirf mera ho, mere dekhne ke
          liye ho. Mai chahta hu ki tumhare sare beautiful sides sirf mere ho
          meri gb. Mai kisiko nahi dekhne du gb. Mai hu selfish meri gb, tumhare
          liye mai selfish hu, mai chinta karunga sab karunga gb. I really
          really love you meri januuu. Mai agar likhne pe aa gaya phir to pata
          nahi kitne lines likh dunga gb 😂. Lekin abhi khatam karte hai meri
          gb. Aur tumhe poora padhna hai meri gb 🙄.
          <p>
            Thankyou meri zindagi me aane ke liye meri gb. Thankyou mujhe choose
            karne ke liye. Thankyou mera banne ke liye meri gb. I really wish ki
            ham hamesha saath rahe and tum meri RSS bano 😁.
          </p>
          <p>
            <strong className="block text-center mt-6 text-xl text-pink-500">
              Shubhreet Forever meri gb.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryUI;
