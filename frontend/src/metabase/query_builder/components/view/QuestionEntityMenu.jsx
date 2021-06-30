/* eslint-disable react/prop-types */
import React from "react";
import { t } from "ttag";

import EntityMenu from "metabase/components/EntityMenu";

import cx from "classnames";

export default function QuestionEntityMenu({
  className,
  question,
  onOpenModal,
  makeSavedQuestionAModel,
}) {
  const canWrite = question && question.canWrite();
  return (
    <EntityMenu
      triggerIcon="pencil"
      className={cx("text-light", className)}
      items={[
        canWrite && {
          icon: "edit_document",
          title: t`Edit this question`,
          action: () => onOpenModal("edit"),
        },
        {
          icon: "history",
          title: t`View revision history`,
          action: () => onOpenModal("history"),
        },
        {
          icon: "add_to_dash",
          title: t`Add to dashboard`,
          action: () => onOpenModal("add-to-dashboard"),
        },
        canWrite && {
          icon: "move",
          title: t`Move`,
          action: () => onOpenModal("move"),
        },
        canWrite && {
          icon: "clone",
          title: t`Duplicate this question`,
          action: () => onOpenModal("clone"),
        },
        canWrite && {
          icon: "",
          title: t`Make this a model`,
          action: () => makeSavedQuestionAModel(),
        },
        canWrite && {
          icon: "archive",
          title: `Archive`,
          action: () => onOpenModal("archive"),
        },
      ]}
    />
  );
}
