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
  EmptyStateLayout,
  Button,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import AddModal from "../../components/AddModal";
import TodoCount from "../../components/Count";
import TodoTable from "../../components/List";

const HomePage = () => {
  const [todos, setTodo] = useState([{id: 1, name: 'Umyć naczynia', isDone: true}]);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <BaseHeaderLayout title="Todo Plugin" subtitle="All your toods in one place" as="h2"></BaseHeaderLayout>
      <ContentLayout>
        {!!todos.length ? (
          <>
            <TodoCount count={todos.length} />
            <TodoTable
              todoData={todos}
              setShowModal={setShowModal}
              toggleTodo={() => {}}
              deleteTodo={() => {}}
              editTodo={() => {}}
            />
          </>
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
      {showModal && <AddModal setShowModal={setShowModal} addTodo={() => {}} />}
    </Layout>
  );
};

export default HomePage;
