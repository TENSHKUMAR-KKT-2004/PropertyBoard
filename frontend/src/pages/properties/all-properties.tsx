import { Add } from '@mui/icons-material'
import { useTable } from '@refinedev/core'
import { Box, Stack, Typography, TextField, Select, MenuItem, useTheme } from '@mui/material'

import { useNavigate } from 'react-router-dom';

import { PropertyCard, CustomButton } from '../../components'
import { useMemo } from 'react';

const AllProperties = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const { tableQueryResult: {
    data, isLoading, isError
  },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable({
    sorters: {
      initial: [
        {
          field: "createdAt",
          order: "desc",
        },
      ],
    },
  })

  const allProperties = data?.data ?? [];

  const currentPrice = sorter.find((item) => item.field === "price")?.order;

  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
  };

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : [],
    );

    return {
      title:
        logicalFilters.find((item) => item.field === "title")?.value ||
        "",
      propertyType:
        logicalFilters.find((item) => item.field === "propertyType")
          ?.value || "",
    };
  }, [filters]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            mb={2}
          >
            <Typography
              fontSize={25}
              fontWeight={700}
              color={isDarkMode ? '#EFEFEF' : '#11142d'}
            >
              {!allProperties.length ? 'There are no properties' : 'All Properties'}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <CustomButton
                title="Add Property"
                handleClick={() => navigate('/properties/create')}
                backgroundColor="#475be8"
                color="#fcfcfc"
                icon={<Add />}
              />
            </Stack>
          </Box>

          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
            mx={"auto"}
          >
            <Box
              // display="flex"
              // gap={2}
              // flexWrap="wrap"
              // mb={{ xs: "20px", sm: 0 }}
              display="flex"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <CustomButton
                title={`Sort price ${currentPrice === "asc" ? "↑" : "↓"}`}
                handleClick={() => toggleSort("price")}
                backgroundColor="#475be8"
                color="#fcfcfc"
              />
              <Box
                display="flex"
                justifyContent="center"
                width="100%"
                mx="auto"
              >
                <TextField
                  variant="outlined"
                  color="info"
                  placeholder="Search by title"
                  value={currentFilterValues.title}
                  onChange={(e) => {
                    setFilters([
                      {
                        field: "title",
                        operator: "contains",
                        value: e.currentTarget.value
                          ? e.currentTarget.value
                          : undefined,
                      },
                    ]);
                  }}
                />
              </Box>

              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value={currentFilterValues.propertyType}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: "propertyType",
                        operator: "eq",
                        value: e.target.value,
                      },
                    ],
                    "replace",
                  );
                }}
              >
                <MenuItem value="">All</MenuItem>
                {[
                  "Apartment",
                  "Villa",
                  "Farmhouse",
                  "Condos",
                  "Townhouse",
                  "Duplex",
                  "Villagehouse",
                  "Studio",
                  "Chalet",
                ].map((type) => (
                  <MenuItem
                    key={type}
                    value={type.toLowerCase()}
                  >
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties?.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
            isDarkMode={isDarkMode}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap" justifyContent={'center'}>
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>
          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ "aria-label": "Without label" }}
            defaultValue={10}
            onChange={(e) =>
              setPageSize(
                e.target.value ? Number(e.target.value) : 10,
              )
            }
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  )
}

export default AllProperties