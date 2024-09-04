import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { $scale } from "@/ui/token/vars/scale/color.ts";

interface Tab<T> {
  label: T;
  components: ReactNode;
}
interface TabProp<T extends string> {
  tabs: Tab<T>[];
}

export const Tab = <T extends string>({ tabs }: TabProp<T>) => {
  const [activeTab, setActiveTab] = useState(0);
  const uniqueLabel = new Set(tabs.map((tab) => tab.label));
  if (uniqueLabel.size !== tabs.length)
    throw new Error("Tabs must have unique label");

  return (
    <div>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsContainer>

      <TabContentContainer>{tabs[activeTab].components}</TabContentContainer>
    </div>
  );
};
export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${$scale.colors.secondary};
  padding: ${$scale.spacing.md};
  border-bottom: 2px solid ${$scale.colors.border};
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: ${$scale.spacing.sm} ${$scale.spacing.lg};
  cursor: pointer;
  font-size: ${$scale.fontSize.large};
  color: ${(props) =>
    props.isActive ? $scale.colors.primary : $scale.colors.textSecondary};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${$scale.colors.primary}` : "none"};
  background-color: transparent;
  border-style: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${$scale.colors.primary};
  }
`;

export const TabContentContainer = styled.div`
  padding: ${$scale.spacing.lg};
  background-color: ${$scale.colors.background};
  border: 1px solid ${$scale.colors.border};
  margin-top: ${$scale.spacing.lg};
  border-radius: ${$scale.borderRadius.medium};
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;
