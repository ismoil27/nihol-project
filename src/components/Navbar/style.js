import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(255, 255, 255);
  width: 100%;
  padding: 0px 10%;
  height: 70px;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

Wrapper.Title = styled.div``;

Wrapper.Avatar = styled.div`
  background: rgb(245, 106, 0);
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
