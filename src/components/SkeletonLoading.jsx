import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";

export default function SkeletonLoading() {
  const allProducts = useSelector((state) => state.apiData.data);

  return (
    <>
      {allProducts.map((currElem, i) => {
        return (
          <Box key={currElem.id} sx={{ display: "flex", gap: "30px" }}>
            <Box sx={{ width: 250 }}>
              <Skeleton variant="rectangular" width={250} height={150} />
              <Skeleton animation="wave" />
              <Box sx={{ display: "flex", gap: "30px" }}>
                <Skeleton animation="wave" width={30} />
                <Skeleton animation="wave" width={30} />
              </Box>
              <Skeleton animation="wave" variant="circular" width={20} />
            </Box>
          </Box>
        );
      })}
    </>
  );
}
