const removeQuantity = (setQuantity, quantity, checked, listPackages, id, setListPackages) => {
  setQuantity(quantity - 1);
  if (checked && listPackages.list.find((pkg) => pkg.id === id)) {
    setListPackages((packages) => {
      const list = packages.list.map((pkg) => (pkg.id === id ? { id, quantity } : pkg));
      return { total: packages.total - 1, list };
    });
  }
};

const addQuantity = (setQuantity, quantity, checked, listPackages, id, setListPackages) => {
  setQuantity(quantity + 1);
  if (checked && listPackages.list.find((pkg) => pkg.id === id)) {
    setListPackages((packages) => {
      const list = packages.list.map((pkg) => (pkg.id === id ? { id, quantity } : pkg));
      return { total: packages.total + 1, list };
    });
  }
};

const addingToRecoil = (checked, listPackages, id, setListPackages, quantity) => {
  if (checked && !listPackages.list.find((pkg) => pkg.id === id)) {
    setListPackages((packages) => {
      return { total: packages.total + quantity, list: [...packages.list, { id, quantity }] };
    });
  } else if (!checked && listPackages.list.find((pkg) => pkg.id === id)) {
    setListPackages((packages) => {
      return {
        total: packages.total - quantity, list: packages?.list.filter((pkg) => pkg.id !== id),
      };
    });
  }
};

export { removeQuantity, addQuantity, addingToRecoil };
