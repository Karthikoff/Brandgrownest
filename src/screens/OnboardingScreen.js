import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { spacing } from "../theme/spacing";

export default function OnboardingScreen() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
     {/* PAGE 1 — PERFECT HERO */}
<View style={styles.heroContainer}>
  
  {/* Background Glow */}
  <Image
    source={require("../../assets/images/Group42.png")}
    style={styles.heroBg}
  />

  {/* Menu */}
  <View style={styles.heroMenu}>
    <TouchableOpacity style={styles.menuButton}>
      <Image
        source={require("../../assets/images/icons/menu.png")}
        style={{ width: 22, height: 22, tintColor: "#fff" }}
      />
    </TouchableOpacity>
  </View>

  {/* Title + Subtitle */}
  <View style={styles.heroTextBlock}>
    <Text style={styles.heroTitle}>GROWNEST</Text>
    <Text style={styles.heroSubtitle}>
      Parent control and Teen autonomy at same place
    </Text>
  </View>

  {/* Hand + Phone */}
  <Image
    source={require("../../assets/images/Logo.png")}
    style={styles.heroFingerprint}
  />

  <Image
    source={require("../../assets/images/Hand_image.png")}
    style={styles.heroHand}
  />

  {/* Fingerprint */}
 
</View>


      {/* Page 2: Plain Black Page */}
      <View style={styles.secondPage}>
        <Text style={styles.secondPageText}>Second Page (Empty for now)</Text>
      </View>

      {/* Page 3 — Features Section */}
<View style={styles.featuresSection}>

<Text style={styles.featuresTitle}>Features</Text>

{/* Feature Items */}
{[
  { icon: "🧑‍👧", text: "Parents in Control" },
  { icon: "🎯", text: "Teens Take Charge" },
  { icon: "💬", text: "Insights That Inspire" },
  { icon: "💭", text: "Financial Wisdom, Together" },
  { icon: "⚙️", text: "Accounts Built Just for You" },
  { icon: "🔗", text: "Learn and Grow with Others" },
].map((item, index) => (
  <View key={index} style={styles.featureCard}>
    <Text style={styles.featureIcon}>{item.icon}</Text>
    <Text style={styles.featureText}>{item.text}</Text>
    <Text style={styles.featureArrow}>▾</Text>
  </View>
))}

</View>

{/* PAGE 4 — Testimonials + Download Section */}
<View style={styles.testimonialSection}>

  {/* Stacked Small Cards */}
  <View style={styles.stackContainer}>
    <View style={[styles.stackCard, { top: -30 }]}>
    <Image
      source={require("../../assets/images/Rectangle.png")}
      style={styles.bigCardImage}
    />
      <Text style={styles.stackName}>Priya Sharma</Text>
      <Text style={styles.stackSub}>17-Year-Old High Schooler</Text>
    </View>

    <View style={[styles.stackCard, { top: -15 }]}>
    <Image
      source={require("../../assets/images/Rectangle.png")}
      style={styles.bigCardImage}
    />
      <Text style={styles.stackName}>Liam Turner</Text>
      <Text style={styles.stackSub}>Community Member & Financial Coach</Text>
    </View>
  </View>

  {/* Big Testimonial Card */}
  <View style={styles.bigCard}>
    <Image
      source={require("../../assets/images/Rectangle.png")}
      style={styles.bigCardImage}
    />

    <Text style={styles.bigName}>Nouman Ejaz</Text>
    <Text style={styles.bigRole}>Parent of Two Teens</Text>

    <Text style={styles.bigContent}>
      "This app has transformed how I manage my kids’ allowances. I love how I
      can guide them while giving them the freedom to set their own goals. It
      feels like a collaboration, not control. Seeing my teens prioritize their
      spending is a proud moment as a parent!"
    </Text>

    <Text style={styles.bigID}>App ID: PARENT1284</Text>
  </View>

  {/* PHONE + TAGLINE SECTION (Corrected) */}
<View style={styles.phoneRowContainer}>

<View style={styles.phoneWithGlow}>
  <Image
    source={require("../../assets/images/iPhoneleft.png")}
    style={styles.phoneImage}
  />

  <Image
    source={require("../../assets/images/imageleft.png")}
    style={styles.leftGlow}
  />
</View>

{/* TEXT BETWEEN PHONES */}
<View style={styles.phoneTextBlock}>
  <Text style={styles.phoneTagline}>
    "Smart Money Habits, One Tap Away"
  </Text>
  <Text style={styles.storeText}>
    Available now on iOS and Android
  </Text>
</View>

{/* RIGHT PHONE + GLOW */}
<View style={styles.phoneWithGlow}>
  <Image
    source={require("../../assets/images/iPhoneright.png")}
    style={styles.phoneImage}
  />

  <Image
    source={require("../../assets/images/imageright.png")}
    style={styles.rightGlow}
  />
</View>

</View>

{/* STORE BUTTONS */}
{/* STORE BUTTONS (Image + Text inside same card) */}
<View style={styles.storeRow}>

  {/* Google Play */}
  <View style={styles.storeBtn}>
    <Image
      source={require("../../assets/images/play-badge.png")}
      style={styles.storeImage}
      resizeMode="contain"
    />
    <Text style={styles.storeBtnText}>GET IT ON Google Play</Text>
  </View>

  {/* App Store */}
  <View style={styles.storeBtn}>
    <Image
      source={require("../../assets/images/appstore-badge.png")}
      style={styles.storeImage}
      resizeMode="contain"
    />
    <Text style={styles.storeBtnText}>Download on App Store</Text>
  </View>

</View>



</View>

{/* PAGE 5 — FAQ Section */}
<View style={styles.faqSection}>

  <Text style={styles.faqTitle}>FAQs</Text>

  {[
    "How do I set up my account and add my teen?",
    "Can I control my teen’s spending?",
    "How can I guide my teen’s financial habits?",
    "Is there a limit to teens I can manage?",
    "How do I log in to the app?",
    "Can I create my own financial goals?",
    "Do I need approval for all my spending?",
    "What kind of financial advice will I get?",
  ].map((q, i) => (
    <View key={i} style={styles.faqCard}>
      <Text style={styles.faqText}>{q}</Text>
    </View>
  ))}

</View>

{/* PAGE 6 — Footer Section */}
<View style={styles.footerSection}>

  {/* Logo + Newsletter */}
  <View style={styles.footerTop}>
    <Image
      source={require("../../assets/images/Logo.png")}
      style={styles.footerLogo}
    />
    <View style={{ flex: 1 }}>
      <Text style={styles.footerTitle}>
        Stay Updated — Join Our Newsletter!
      </Text>

      <View style={styles.emailRow}>
        <Text style={styles.emailPlaceholder}>Enter your mail Id</Text>
        <View style={styles.emailButton}>
          <Text style={styles.buttonArrow}>➤</Text>
        </View>
      </View>
    </View>
  </View>

  {/* 4 Column Links */}
  <View style={styles.footerColumns}>
    {/* Navigation */}
    <View style={styles.column}>
      <Text style={styles.columnTitle}>NAVIGATION</Text>
      <Text style={styles.columnItem}>Features</Text>
      <Text style={styles.columnItem}>Testimonial</Text>
      <Text style={styles.columnItem}>FAQs</Text>
    </View>

    {/* Contact Us */}
    <View style={styles.column}>
      <Text style={styles.columnTitle}>CONTACT US</Text>
      <Text style={styles.columnItem}>
        support@grownest.com 📧
      </Text>
      <Text style={styles.columnItem}>1450-1234-2346 📞</Text>
      <Text style={styles.columnItem}>Bangalore, India 📍</Text>
    </View>

    {/* Social */}
    <View style={styles.column}>
      <Text style={styles.columnTitle}>SOCIAL MEDIA</Text>
      <Text style={styles.columnItem}>Linkedin 🔗</Text>
      <Text style={styles.columnItem}>Instagram 📸</Text>
      <Text style={styles.columnItem}>Facebook 👍</Text>
    </View>

    {/* Other Links */}
    <View style={styles.column}>
      <Text style={styles.columnTitle}>OTHER LINKS</Text>
      <Text style={styles.columnItem}>Blog/Resources</Text>
      <Text style={styles.columnItem}>Privacy Policy</Text>
      <Text style={styles.columnItem}>Terms & Conditions</Text>
    </View>
  </View>

  <Text style={styles.copyright}>
    © 2025 Grownest. All Rights Reserved.
  </Text>
</View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
  },

  scrollContent: {
    paddingBottom: 100,
  },

/* ===== HERO SECTION (PAGE 1) ===== */

heroContainer: {
  height: 650,
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  position: "relative",
},

heroBg: {
  position: "absolute",
  width: "125%",
  height: "125%",
  resizeMode: "cover",
  top: -50,
  opacity: 0.75,        // ★ Less glow => closer to original
},

heroMenu: {
  position: "absolute",
  top: 45,
  left: 20,
},
menuButton: {
  width: 42,
  height: 42,
  borderRadius: 12,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center",
},

heroTextBlock: {
  marginTop: 110,        // ★ moved up
  alignItems: "center",
},
heroTitle: {
  color: "#fff",
  fontSize: 30,
  fontWeight: "700",
  letterSpacing: 2,
},
heroSubtitle: {
  color: "#d3dce0",
  fontSize: 13.5,
  marginTop: 6,
},

// heroHand: {
//   marginTop: 10,
//   width: 280,
//   height: 430,
//   resizeMode: "contain",
//   zIndex: 5,
// },

// heroFingerprint: {
//   position: "absolute",
//   top: 240,        // ★ aligned into the screen area
//   width: 110,
//   height: 110,
//   resizeMode: "contain",
//   zIndex: 10,
// },
phoneContainer: {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,    // ADJUST TOP POSITION
  position: "relative",
},

heroHand: {
  width: 300,
  height: 480,
  resizeMode: "contain",
  marginTop: 70,     // MOVE HAND LOWER
  zIndex: 1,
  position:"relative",
},

heroFingerprint: {
  position: "absolute",
  top: 400,         // ★ EXACT POSITION INSIDE PHONE SCREEN
  width: 80,
  height: 130,
  resizeMode: "contain",
  zIndex: 9999,        // appear above hand image
},



  /* ===== PAGE 2 ===== */
  secondPage: {
    height: 600,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  secondPageText: {
    color: "#777",
    fontSize: 16,
  },

  /* ===== PAGE 3 — Features Section ===== */

featuresSection: {
  paddingHorizontal: spacing.lg,
  marginTop: 30,
  paddingBottom: 40,
},

featuresTitle: {
  color: "#fff",
  fontSize: 22,
  fontWeight: "600",
  marginBottom: 20,
},

featureCard: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 16,
  paddingHorizontal: 18,
  borderRadius: 18,
  backgroundColor: "rgba(255,255,255,0.05)",
  marginBottom: 12,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.1)",
},

featureIcon: {
  fontSize: 24,
  marginRight: 12,
},

featureText: {
  flex: 1,
  color: "#fff",
  fontSize: 16,
},

featureArrow: {
  color: "#00d48a",
  fontSize: 20,
  marginLeft: 10,
  fontWeight: "700",
},

/* ===== PAGE 4 — Testimonials ===== */

testimonialSection: {
  marginTop: 40,
  paddingHorizontal: spacing.lg,
  paddingBottom: 50,
},

/* Stacked small cards */
stackContainer: {
  alignItems: "center",
  marginBottom: 20,
},
stackCard: {
  width: "90%",
  backgroundColor: "rgba(255,255,255,0.05)",
  borderRadius: 16,
  padding: 14,
  marginBottom: -10,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.1)",
},
stackName: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},
stackSub: {
  color: "#aaa",
  fontSize: 12,
  marginTop: 4,
},

/* Big testimonial card */
bigCard: {
  backgroundColor: "rgba(255,255,255,0.08)",
  borderRadius: 18,
  padding: 20,
  marginTop: 20,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.15)",
},
bigCardImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
  marginBottom: 12,
},
bigName: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "700",
},
bigRole: {
  color: "#ccc",
  fontSize: 13,
  marginBottom: 14,
},
bigContent: {
  color: "#ddd",
  fontSize: 14,
  lineHeight: 20,
  marginBottom: 14,
},
bigID: {
  color: "#00d48a",
  fontSize: 13,
  fontWeight: "600",
  textAlign: "right",
},

/* ===== PHONES + TAGLINE (Figma Accurate) ===== */

phoneRowContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 50,
  paddingHorizontal: 10,
},

phoneWithGlow: {
  width: 140,
  height: 260,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
},

leftGlow: {
  position: "absolute",
  left: -35,       // pushes the glow outward
  width: 120,
  height: 220,
  resizeMode: "contain",
  opacity: 1,
  zIndex: -1,
},

rightGlow: {
  position: "absolute",
  right: -35,      // pushes glow outward
  width: 120,
  height: 220,
  resizeMode: "contain",
  opacity: 1,
  zIndex: -1,
},

phoneImage: {
  width: 120,
  height: 260,
  resizeMode: "contain",
  zIndex: 2,
},

phoneTextBlock: {
  flex: 1,
  alignItems: "center",
  paddingHorizontal: 10,
},

phoneTagline: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
  textAlign: "center",
  marginBottom: 6,
},

storeRow: {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 25,
  gap: 14,
},

storeBtn: {
  backgroundColor: "rgba(255,255,255,0.08)",
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 12,
  width: 160,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.15)",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 8,
},

storeImage: {
  width: 120,
  height: 28,
  marginBottom: 5,
},

storeBtnText: {
  color: "#fff",
  fontSize: 12,
  textAlign: "center",
},

  


/* ===== PAGE 5 — FAQ Section ===== */

faqSection: {
  marginTop: 40,
  paddingHorizontal: spacing.lg,
  paddingBottom: 50,
},

faqTitle: {
  color: "#fff",
  fontSize: 22,
  fontWeight: "600",
  marginBottom: 20,
},

faqCard: {
  paddingVertical: 16,
  paddingHorizontal: 18,
  backgroundColor: "rgba(255,255,255,0.05)",
  borderRadius: 16,
  marginBottom: 14,
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.08)",
},

faqText: {
  color: "#fff",
  fontSize: 15,
  lineHeight: 22,
},

/* ===== PAGE 6 — FOOTER ===== */

footerSection: {
  marginTop: 50,
  backgroundColor: "rgba(255,255,255,0.03)",
  paddingVertical: 30,
  paddingHorizontal: spacing.lg,
  borderTopWidth: 1,
  borderColor: "rgba(255,255,255,0.1)",
},

footerTop: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 30,
},

footerLogo: {
  width: 60,
  height: 60,
  marginRight: 20,
  resizeMode: "contain",
},

footerTitle: {
  color: "#fff",
  fontSize: 16,
  marginBottom: 12,
},

emailRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.08)",
  borderRadius: 10,
  paddingHorizontal: 12,
  paddingVertical: 14,
},

emailPlaceholder: {
  color: "#aaa",
  fontSize: 14,
  flex: 1,
},

emailButton: {
  backgroundColor: "#2f89ff",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
},

buttonArrow: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},

footerColumns: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 20,
  flexWrap: "wrap",
},

column: {
  width: "45%",
  marginBottom: 20,
},

columnTitle: {
  color: "#00e5c0",
  fontSize: 14,
  fontWeight: "700",
  marginBottom: 10,
},

columnItem: {
  color: "#fff",
  fontSize: 14,
  marginBottom: 6,
},

copyright: {
  color: "#aaa",
  fontSize: 12,
  textAlign: "center",
  marginTop: 20,
},

});
