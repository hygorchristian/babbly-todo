import React from 'react';
import styled from 'styled-components';
import { Linking } from 'react-native';
import HTML from 'react-native-render-html';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  padding-vertical: 12px;
  padding-horizontal: 20px;
  background-color: ${({ theme }) => theme.colors.blueLight};
  border-radius: 10px;
`;

export const Triangle = styled.View`
  width: 0;
  height: 0;
  align-self: center;
  border-left-width: 10px;
  border-right-width: 10px;
  border-bottom-width: 10px;
  border-style: solid;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.blueLight};
`;

export const ATag = styled.Text`
  font-family: PoppinsBold;
  color: ${({ theme }) => theme.colors.greenDark};
  text-decoration: none;
`;

export const Text = styled(HTML).attrs(({ theme }) => ({
  renderers: {
    a: (htmlAttribs, children) => (
      <ATag onPress={() => Linking.openURL(htmlAttribs.href)}>{children}</ATag>
    ),
  },
  tagsStyles: {
    p: {
      color: theme.colors.charcoal,
      fontSize: 14,
      fontFamily: 'PoppinsMedium',
      lineHeight: 24,
    },
    strong: {
      fontFamily: 'PoppinsBold',
    },
    span: {
      fontSize: 20,
    },
    a: {
      fontFamily: 'PoppinsBold',
      color: theme.colors.greenDark,
      textDecoration: 'none',
    },
  },
}))``;
