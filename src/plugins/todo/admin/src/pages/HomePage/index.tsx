/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
  Typography,
  EmptyStateLayout,
  Button,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import pluginId from "../../pluginId";

const HomePage = () => {
  const [todos, setTodo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <BaseHeaderLayout title="Todo Plugin" subtitle="All your toods in one place" as="h2"></BaseHeaderLayout>
      <ContentLayout>
        {!!todos.length ? (
          <Typography>table</Typography>
        ) : (
          <EmptyStateLayout
            content="You don't have any todos yet.."
            action={
              <Button
                variant="secondary"
                startIcon={<Plus />}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Add your first todo..
              </Button>
            }
          ></EmptyStateLayout>
        )}
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
