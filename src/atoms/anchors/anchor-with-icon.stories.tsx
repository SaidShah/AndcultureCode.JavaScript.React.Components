import React from "react";
import Faker from "faker";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import { AnchorWithIcon } from "./anchor-with-icon";
import { select, text } from "@storybook/addon-knobs";
import { ButtonSizes } from "../constants/button-sizes";
import { ButtonStyles } from "../constants/button-styles";
import { Icons } from "../constants/icons";
import { IconUtils } from "../../utilities/icon-utils";
import { SvgIcons } from "../constants/svg-icons";

addDecorator(StoryRouter());

export default {
    component: AnchorWithIcon,
    title: "Atoms | Anchors / AnchorWithIcon",
};

export const anchorIconWithChevronDownIcon = () => {
    IconUtils.register(SvgIcons);

    return (
        <AnchorWithIcon
            accessibleText="Text for screen reader"
            size={ButtonSizes.Medium}
            style={ButtonStyles.Primary}
            icon={Icons.Checkmark}
            to="/test">
            {Faker.lorem.words(5)}
        </AnchorWithIcon>
    );
};

export const anchorIconKnobs = () => {
    IconUtils.register(SvgIcons);

    return (
        <AnchorWithIcon
            accessibleText={text("accessibleText", "Text for screen reader")}
            size={select("size", ButtonSizes, ButtonSizes.Medium)}
            style={select("style", ButtonStyles, ButtonStyles.Primary)}
            icon={select("icon", Icons, Icons.Checkmark)}
            to="/test">
            {text("text", "Anchor text")}
        </AnchorWithIcon>
    );
};
