import React from "react";
import styled from "styled-components";
import * as S from "./style";
import { messages } from "../../../Constants/Strings";
import FaIconTemplate from "../../Atoms/FaIcons/FaIconTemplate";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <S.Layout>
      <S.StyledCopy>
        &copy;{messages.copyRight}
      </S.StyledCopy>

      <S.StyledIcon
        href="https://twitter.com/@20_tamura_t"
        target="_blank"
      >
        <FaIconTemplate iconName={faTwitter}/>
      </S.StyledIcon>
    </S.Layout>
  )
}

export default Footer;
