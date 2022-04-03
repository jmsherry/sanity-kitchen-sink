import React from "react";
import AuthorList from "./../components/author-list";
import CTALink from "./../components/CTALink";
import CTAction from "./../components/CTAction";
import Figure from "./../components/Figure";
import InfoRows from "./../components/InfoRows";
import Latex from "./../components/Latex";
import MainImage from "./../components/MainImage";
import BlogPost from "./../components/blog-post";
import BlogPostPreview from "./../components/blog-post-preview";
import BlogPostPreviewGrid from "./../components/blog-post-preview-grid";
import Container from "./../components/container";
import CTA from "./../components/cta";
import Definition from "./../components/definition";
import CTAColumns from "./../components/cta-columns";
import Errors from "./../components/errors";
import Footer from "./../components/footer";
import GeneralArticle from "./../components/general-article";
import GraphQLErrorList from "./../components/graphql-error-list";
import Header from "./../components/header";
import Hero from "./../components/hero";
import Layout from "./../components/layout";
import PortableText from "./../components/portableText";
import Pricing from "./../components/pricing";
// import SEO from "./../components/seo";
// import Serializers from "./../components/serializers";
import {TopWave, BottomWave} from "./../components/wave";

const Components = {
  AuthorList,
  CTALink,
  CTAction,
  Figure,
  Definition,
  InfoRows,
  Latex,
  MainImage,
  BlogPost,
  BlogPostPreview,
  BlogPostPreviewGrid,
  Container,
  CTA,
  CTAColumns,
  CtaPlug: CTA,
  Errors,
  Footer,
  GeneralArticle,
  GraphQLErrorList,
  Header,
  Hero,
  Layout,
  PortableText,
  Pricing,
  // SEO,
  // Serializers,
  TopWave,
  BottomWave
};

export default block => {
  // component does exist
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
